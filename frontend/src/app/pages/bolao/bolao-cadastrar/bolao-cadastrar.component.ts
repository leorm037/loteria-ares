import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../../services/breadcrumb.service';
import { Breadcrumb } from '../../../interfaces/breadcrumb';

@Component({
  selector: 'app-bolao-cadastrar',
  imports: [],
  templateUrl: './bolao-cadastrar.component.html'
})
export class BolaoCadastrarComponent implements OnInit{

  private readonly breadcrumbs: Breadcrumb[] = [
    {
      href: "/bolao",
      iconClass: "fa-regular fa-futbol",
      texto: "Bolão"
    },
    {
      iconClass: "bi bi-plus",
      texto: "Novo"
    }
  ];

  constructor(
    private breadcrumbService: BreadcrumbService
  ) {}

  ngOnInit(): void {
    this.breadcrumbService.sendBreadcrumb(this.breadcrumbs);
  }


}
