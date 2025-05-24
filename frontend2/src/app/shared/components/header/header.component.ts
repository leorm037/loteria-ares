import { Component } from '@angular/core';
import { BreadcrumbComponent } from "../breadcrumb/breadcrumb.component";
import { RouterModule } from '@angular/router';
import { AuthService } from '@app/core';

@Component({
  selector: 'app-header',
  imports: [BreadcrumbComponent, RouterModule],
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(
    private authService: AuthService,
  ) {}

  public logout(): void {
    this.authService.logOut();
  }

}
