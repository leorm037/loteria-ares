import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from '../../interfaces/breadcrumb';
import { BreadcrumbService } from '../../services/breadcrumb.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  imports: [RouterModule],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.css'
})
export class BreadcrumbComponent implements OnInit {

  public breadcrumbs!: Breadcrumb[] | null;

  constructor(
    private service: BreadcrumbService
  ) { }

  ngOnInit(): void {
      this.service.getBreadcrumbs().subscribe(
        breadcrumbs => {
          this.breadcrumbs = breadcrumbs;
        }
      );
  }


}
