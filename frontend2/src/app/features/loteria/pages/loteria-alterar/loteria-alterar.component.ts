import { Component, OnInit } from '@angular/core';
import { LoteriaFormComponent } from "../../components/loteria-form/loteria-form.component";
import { Breadcrumb, BreadcrumbService } from '@app/shared';
import { ActivatedRoute, Router } from '@angular/router';
import { Loteria } from '@app/core';
import { LoteriaService } from '../../services/loteria.service';

@Component({
  selector: 'app-loteria-alterar',
  imports: [LoteriaFormComponent],
  templateUrl: './loteria-alterar.component.html',
  styleUrl: './loteria-alterar.component.css'
})
export class LoteriaAlterarComponent implements OnInit {

  private readonly breadcrumbs: Breadcrumb[] = [
    {
      iconClass: "fa-solid fa-clover icon-rotate-45",
      href: "/loterias",
      value: "Loteria"
    },
    {
      iconClass: "bi bi-pencil-fill",
      value: "Editar"
    }
  ];

  public loteria!: Loteria;

  public constructor(
    private breadcrumbService: BreadcrumbService,
    private activatedRoute: ActivatedRoute,
    private service: LoteriaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.breadcrumbService.set(this.breadcrumbs);

    const id = this.activatedRoute.snapshot.paramMap.get('id');

    if (id) {
      this.service.getById(id).subscribe({
        next: (loteria) => {
          this.loteria = loteria;
        }
      });
    }
  }

  public update(loteria: Loteria): void {
    this.service.update(loteria).subscribe({
      complete: () => {
        this.router.navigateByUrl("/loterias");
      }
    });
  }
}
