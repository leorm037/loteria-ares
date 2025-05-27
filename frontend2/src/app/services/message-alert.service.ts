import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, Observable } from 'rxjs';
import { MessageAlert } from '../interfaces/message-alert';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MessageAlertService {

  private messagesAlertSubject = new BehaviorSubject<MessageAlert[] | null>(null);

  private messagesAlertObject = this.messagesAlertSubject.asObservable();

  constructor(
    private router: Router
  ) { 
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => this.clear());
  }

  public getMessagesAlert(): Observable<MessageAlert[] | null> {
    return this.messagesAlertSubject;
  }

  public clear(): void {
    this.messagesAlertSubject.next(null);
  }

  public sendMessagesAlert(messagesAlert: MessageAlert[] | null) {
    this.messagesAlertSubject.next(messagesAlert);
  }
}
