import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface Message {
  severity?: 'success' | 'info' | 'warn' | 'error';
  summary?: string;
  detail?: string;
  life?: number;
}

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messageSource = new Subject<Message>();
  message$ = this.messageSource.asObservable();

  add(message: Message) {
    this.messageSource.next(message);
  }

  clear() {
    this.messageSource.next({ detail: '' });
  }
}
