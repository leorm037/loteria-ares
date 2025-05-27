import { Component, inject, OnInit } from '@angular/core';
import { Alert } from '../../interfaces/alert';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-alert',
  imports: [],
  templateUrl: './alert.component.html'
})
export class AlertComponent implements OnInit {

  public alerts!: Alert[] | null;

  private service: AlertService = inject(AlertService);

  ngOnInit(): void {
    this.service.getAlert()
      .subscribe(
        alerts => {
          this.alerts = alerts;
        }
      );
  }
}
