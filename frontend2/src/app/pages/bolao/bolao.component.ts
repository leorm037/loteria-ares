import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Breadcrumb } from '../../interfaces/breadcrumb';
import { BreadcrumbService } from '../../services/breadcrumb.service';

@Component({
  selector: 'app-bolao',
  imports: [RouterModule],
  templateUrl: './bolao.component.html'
})
export class BolaoComponent implements OnInit {

  private readonly breadcrumbs: Breadcrumb[] = [
    {
      iconClass: "fa-regular fa-futbol",
      texto: "Bolão"
    }
  ];

  constructor(
    private breadcrumbService: BreadcrumbService
  ) { }

  ngOnInit(): void {
    this.breadcrumbService.sendBreadcrumb(this.breadcrumbs);
  }

}
