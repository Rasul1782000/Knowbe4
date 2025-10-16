import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: false,
  templateUrl: './search.html',
  styleUrl: './search.scss'
})

export class SearchComponent {
 tooltipOptions = {
        showDelay: 150,
        autoHide: false,
        tooltipEvent: 'hover',
        tooltipPosition: 'left'
    } as const;
}



