import { Component } from '@angular/core';
import { AlertComponent, FooterComponent, HeaderComponent, LoadingComponent, ToastMessage, ToastService } from '@app/shared';
import { RouterModule } from '@angular/router';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-layout-main',
  imports: [HeaderComponent, FooterComponent, RouterModule, NgbToastModule, AlertComponent, LoadingComponent],
  templateUrl: './layout-main.component.html',
  styles: [
    `
      :host {
        display: flex !important;
        flex-direction: column !important;
        min-height: 100vh !important;
      }
    `
  ]
})
export class LayoutMainComponent {

  public toasts: ToastMessage[] = [];
  
  public constructor(
    public toastService: ToastService,
  ) { }

}
