import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MenuItem, MessageService } from 'primeng/api';
import { TerminalService } from 'primeng/terminal';
import { PhotoService } from '../../service/services/photo-service';
import { NodeService } from '../../service/services/node-service';

@Component({
  selector: 'app-dock',
  templateUrl: './dock.html',
  styleUrls: ['./dock.scss'],
  standalone: false,
  providers: [MessageService, TerminalService, PhotoService, NodeService]
})
export class DockComponent implements OnInit, OnDestroy {

  displayFinder = false;
  displayTerminal = false;
  displayGalleria = false;

  dockItems: MenuItem[] = [];
  menubarItems: any[] = [];
  responsiveOptions: any[] = [];
  images: any[] = [];
  nodes: any[] = [];
  subscription?: Subscription;

  constructor(
    private galleriaService: PhotoService,
    private nodeService: NodeService,
    private messageService: MessageService,
    private terminalService: TerminalService
  ) { }

  ngOnInit() {
    this.dockItems = [
      {
        label: 'Finder',
        icon: 'https://primefaces.org/cdn/primeng/images/dock/finder.svg',
        command: () => this.displayFinder = true
      },
      {
        label: 'Terminal',
        icon: 'https://primefaces.org/cdn/primeng/images/dock/terminal.svg',
        command: () => this.displayTerminal = true
      },
      {
        label: 'Photos',
        icon: 'https://primefaces.org/cdn/primeng/images/dock/photos.svg',
        command: () => this.displayGalleria = true
      },
      {
        label: 'GitHub',
        icon: 'https://primefaces.org/cdn/primeng/images/dock/github.svg',
        url: 'https://github.com/primefaces/primeng'
      },
      {
        label: 'Trash',
        icon: 'https://primefaces.org/cdn/primeng/images/dock/trash.png',
        command: () => this.messageService.add({ severity: 'info', summary: 'Trash is empty', key: 'tc' })
      }
    ];

    this.menubarItems = [/* ... keep your menubar setup ... */];

    this.responsiveOptions = [
      { breakpoint: '1024px', numVisible: 3 },
      { breakpoint: '768px', numVisible: 2 },
      { breakpoint: '560px', numVisible: 1 }
    ];

    this.subscription = this.terminalService.commandHandler.subscribe(command => this.commandHandler(command));

    this.galleriaService.getImages().then(data => this.images = data);
    this.nodeService.getFiles().then(data => this.nodes = data);
  }

  commandHandler(text: string) {
    let response;
    const argsIndex = text.indexOf(' ');
    const command = argsIndex !== -1 ? text.substring(0, argsIndex) : text;

    switch (command) {
      case 'date': response = 'Today is ' + new Date().toDateString(); break;
      case 'greet': response = 'Hola ' + text.substring(argsIndex + 1) + '!'; break;
      case 'random': response = String(Math.floor(Math.random() * 100)); break;
      default: response = 'Unknown command: ' + command;
    }
    this.terminalService.sendResponse(response);
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
