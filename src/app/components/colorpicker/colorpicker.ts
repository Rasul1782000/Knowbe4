
import { Component } from '@angular/core';


@Component({
  selector: 'app-colorpicker-component',
  standalone: false,
  templateUrl: './colorpicker.html',
  styleUrl: './colorpicker.scss'
})
export class ColorpickerComponent {
  color: string | undefined;
}
