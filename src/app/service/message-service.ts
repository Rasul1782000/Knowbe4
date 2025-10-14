import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messageSubject = new Subject<string>();

  sendMessage(message: string) {
    this.messageSubject.next(message);
  }

  getMessage(): Observable<string> {
    return this.messageSubject.asObservable();
  }

  clearMessages(): Observable<string>
  {
    return this.messageSubject.asObservable();

  }
}
