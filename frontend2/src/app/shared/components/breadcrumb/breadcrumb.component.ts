import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Breadcrumb, BreadcrumbService } from '@app/shared';

@Component({
  selector: 'app-breadcrumb',
  imports: [RouterModule],
  templateUrl: './breadcrumb.component.html'
})
export class BreadcrumbComponent implements OnInit{

  public breadcrumbs!: Breadcrumb[] | null;

  constructor(
    private service: BreadcrumbService
  ) {}
  ngOnInit(): void {
    this.service.get().subscribe(
      breadcrumbs => {
        this.breadcrumbs = breadcrumbs;
      }
    );
  }



}
