import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface Confirmation {
  target?: EventTarget | null;
  message: string;
  icon?: string;
  acceptButtonProps?: { label?: string; severity?: string; outlined?: boolean };
  rejectButtonProps?: { label?: string; severity?: string; outlined?: boolean };
  accept?: () => void;
  reject?: () => void;
}

@Injectable({
  providedIn: 'root'
})
export class ConfirmationService {
  private confirmationSource = new Subject<Confirmation>();
  confirmation$ = this.confirmationSource.asObservable();

  confirm(confirmation: Confirmation) {
    this.confirmationSource.next(confirmation);
  }
}
