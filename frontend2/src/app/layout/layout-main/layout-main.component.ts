import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout-main',
  imports: [HeaderComponent, FooterComponent, RouterModule],
  templateUrl: './layout-main.component.html'
})
export class LayoutMainComponent {

}
