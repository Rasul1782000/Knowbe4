// src/app/service/appconfigservice.ts

import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root' // makes it globally injectable
})
export class AppConfigService {

  // Signal to track whether theme/transition setup is complete
  private _transitionComplete = signal(false);

  // Example: Theme / color configuration
  private theme: 'light' | 'dark' = 'light';

  constructor() { }

  /** ---------------- Transition Methods ---------------- **/

  // Method to set transition complete state
  setTransitionComplete(status: boolean): void {
    this._transitionComplete.set(status);
  }

  // Getter to check transition completion
  transitionComplete(): boolean {
    return this._transitionComplete();
  }

  // Reset transition status
  resetTransition(): void {
    this._transitionComplete.set(false);
  }

  /** ---------------- Theme Methods ---------------- **/

  /** Set the app theme */
  setTheme(theme: 'light' | 'dark'): void {
    this.theme = theme;
    this.setTransitionComplete(true); // mark as complete whenever theme changes
  }

  /** Get the current app theme */
  getTheme(): 'light' | 'dark' {
    return this.theme;
  }
}
