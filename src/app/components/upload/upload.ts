import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { PrimeNG } from 'primeng/config';
import { FileSelectEvent } from 'primeng/fileupload';



@Component({
  selector: 'app-upload',
  standalone: false,
  templateUrl: './upload.html',
  styleUrl: './upload.scss',
  providers: [MessageService]

})
export class UploadComponent {

  files: { name: string; size: number }[] = [];

  totalSize: number = 0;

  totalSizePercent: number = 0;


  constructor(private config: PrimeNG, private messageService: MessageService) { }

  choose(event: any, callback: () => void) {
    callback();
  }

  onRemoveTemplatingFile(event: any, file: File, removeFileCallback: Function) {
    const index = this.files.indexOf(file); // get index dynamically
    if (index >= 0) removeFileCallback(event, index);

    // Update totals
    this.totalSize = this.files.reduce((acc, f) => acc + f.size, 0);
    this.totalSizePercent = this.totalSize / 10;
  }


  onClearTemplatingUpload(clear: () => void) {
    clear();
    this.totalSize = 0;
    this.totalSizePercent = 0;
  }

  onTemplatedUpload() {
    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
  }

  onSelectedFiles(event: FileSelectEvent) {
    this.files = event.files;
    this.totalSize = this.files.reduce((acc, file) => acc + file.size, 0);
    this.totalSizePercent = this.totalSize / 10;
  }

  uploadEvent(callback: () => void) {
    callback();
  }

  formatSize(bytes: number) {
    const k = 1024;
    const dm = 3;
    const sizes = this.config.translation?.fileSizeTypes || ['B', 'KB', 'MB', 'GB', 'TB'];


    const i = Math.floor(Math.log(bytes) / Math.log(k));
    const formattedSize = parseFloat((bytes / Math.pow(k, i)).toFixed(dm));

    return `${formattedSize} ${sizes[i]}`;
  }
}