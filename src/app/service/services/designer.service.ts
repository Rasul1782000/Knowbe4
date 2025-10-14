import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignerService {

  private _preset = signal<'light' | 'dark'>('light');

  constructor() { }

  preset(): boolean {
    return true;
  }

  subpreset(): 'light' | 'dark' {
    return this._preset();
  }


  /** Update the preset */
  setPreset(preset: 'light' | 'dark'): void {
    this._preset.set(preset);
  }

  /** Toggle between light/dark presets */
  togglePreset(): void {
    this._preset.set(this._preset() === 'light' ? 'dark' : 'light');
  }
}




