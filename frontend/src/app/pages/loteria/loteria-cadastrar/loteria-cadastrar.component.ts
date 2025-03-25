import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from '../../../interfaces/breadcrumb';
import { BreadcrumbService } from '../../../services/breadcrumb.service';

@Component({
  selector: 'app-loteria-cadastrar',
  imports: [],
  templateUrl: './loteria-cadastrar.component.html'
})
export class LoteriaCadastrarComponent implements OnInit{

  private readonly breadcrumbs: Breadcrumb[] = [
    {
      href: "/loteria",
      iconClass: "fa-solid fa-clover icon-rotate-45",
      texto: "Loteria"
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
