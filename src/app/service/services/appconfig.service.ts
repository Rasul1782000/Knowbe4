import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // makes it globally injectable
})
export class AppConfigService {

  private transitionCompleteFlag: boolean = false;

  // Example: Theme / color configuration
  private theme: 'light' | 'dark' = 'light';

  constructor() { }

  /** Set the app theme */
  setTheme(theme: 'light' | 'dark') {
    this.theme = theme;
    this.transitionCompleteFlag = true;
  }

  /** Get the current app theme */
  getTheme(): 'light' | 'dark' {
    return this.theme;
  }

  /** Check if a transition (e.g., theme change) is complete */
  transitionComplete(): boolean {
    return this.transitionCompleteFlag;
  }

  /** Reset transition status */
  resetTransition() {
    this.transitionCompleteFlag = false;
  }
}
