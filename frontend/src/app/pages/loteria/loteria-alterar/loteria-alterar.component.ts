import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Breadcrumb } from '../../../interfaces/breadcrumb';
import { BreadcrumbService } from '../../../services/breadcrumb.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-loteria-alterar',
  imports: [ReactiveFormsModule],
  templateUrl: './loteria-alterar.component.html'
})
export class LoteriaAlterarComponent implements OnInit {

  loteriaUuid!: string;

  public form!: FormGroup;

  private readonly breadcrumbs: Breadcrumb[] = [
    {
      href: "/loteria",
      iconClass: "fa-solid fa-clover icon-rotate-45",
      texto: "Loteria"
    },
    {
      iconClass: "bi bi-pencil-square",
      texto: "Alterar"
    }
  ];

  constructor(
    private routeActivated: ActivatedRoute,
    private breadcumberService: BreadcrumbService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loteriaUuid = String(this.routeActivated.snapshot.paramMap.get('uuid'));

    this.form = this.formBuilder.group({
      nome: [null, [Validators.required]],
      abreviacao: [null],
      apiUrl: [null, [Validators.required]],
      apostas: [null, [Validators.required]],
      dezenas: [null, [Validators.required]]
    });

    this.breadcumberService.sendBreadcrumb(this.breadcrumbs);
  }

  public submit() {
    if (this.form.valid) {
      this.router.navigateByUrl('/loteria');
    }
  }
}
