import { Component } from '@angular/core';

@Component({
  selector: 'app-carouselcardcomponent',
  standalone: false,
  templateUrl: './carouselcard.html',
  styleUrl: './carouselcard.scss',
})
export class Carouselcardcomponent {


  slides = [
    'https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp',
    'https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp',
    'https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp',
    'https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp',
  ];
}
