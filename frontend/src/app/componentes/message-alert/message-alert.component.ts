import { Component, OnInit } from '@angular/core';
import { MessageAlert } from '../../interfaces/message-alert';
import { MessageAlertService } from '../../services/message-alert.service';

@Component({
  selector: 'app-message-alert',
  imports: [],
  templateUrl: './message-alert.component.html'
})
export class MessageAlertComponent implements OnInit {

  public messagesAlert!: MessageAlert[] | null;

  constructor(
    private service: MessageAlertService
  ) { }

  ngOnInit(): void {
    this.service.getMessagesAlert()
      .subscribe(
        messagesAlert => {
          this.messagesAlert = messagesAlert;
        }
      );
  }

}
