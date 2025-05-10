import { Component } from '@angular/core';
import { BreadcrumbComponent } from "../breadcrumb/breadcrumb.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [BreadcrumbComponent, RouterModule],
  templateUrl: './header.component.html'
})
export class HeaderComponent {

}
