import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { BreadcrumbComponent } from './componentes/breadcrumb/breadcrumb.component';

@Component({
  selector: '[app-root]',
  imports: [RouterModule, RouterOutlet, BreadcrumbComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
