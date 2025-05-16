import { Component } from '@angular/core';
import { FooterComponent, HeaderComponent } from '@app/shared';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout-main',
  imports: [HeaderComponent, FooterComponent, RouterModule],
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

}
