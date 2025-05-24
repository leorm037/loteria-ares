import { Component, OnInit } from '@angular/core';
import { LoteriaFormComponent } from "../../components/loteria-form/loteria-form.component";
import { RouterModule } from '@angular/router';
import { Breadcrumb, BreadcrumbService } from '@app/shared';

@Component({
  selector: 'app-loteria-criar',
  imports: [LoteriaFormComponent, RouterModule],
  templateUrl: './loteria-criar.component.html',
  styleUrl: './loteria-criar.component.css'
})
export class LoteriaCriarComponent implements OnInit {

  private readonly breadcrumbs: Breadcrumb[] = [
    {
      iconClass: "fa-solid fa-clover icon-rotate-45",
      href: "/loterias",
      value: "Loteria"
    },
    {
      iconClass: "bi bi-plus",
      value: "Novo"
    }
  ];

  public constructor(
    private breadcrumbService: BreadcrumbService
  ) {}

  ngOnInit(): void {
    this.breadcrumbService.set(this.breadcrumbs);
  }

}
