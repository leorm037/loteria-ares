import { Component } from '@angular/core';
import { MenuComponent } from "../menu/menu.component";
import { BreadcrumbComponent } from "../breadcrumb/breadcrumb.component";

@Component({
  selector: 'app-cabecalho',
  imports: [MenuComponent, BreadcrumbComponent],
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.css'
})
export class CabecalhoComponent {

}
