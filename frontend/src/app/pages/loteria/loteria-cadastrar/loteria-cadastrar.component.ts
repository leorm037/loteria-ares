import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from '../../../interfaces/breadcrumb';
import { BreadcrumbService } from '../../../services/breadcrumb.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loteria-cadastrar',
  imports: [ReactiveFormsModule],
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

  public form!: FormGroup;

  constructor(
    private breadcrumbService: BreadcrumbService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome: [null, [Validators.required]],
      abreviacao: [null],
      apiUrl: [null, [Validators.required]],
      apostas: [null, [Validators.required]],
      dezenas: [null, [Validators.required]]
    });
    this.breadcrumbService.sendBreadcrumb(this.breadcrumbs);
  }

  public submit() {
    if (this.form.valid) {
      this.router.navigateByUrl('/loteria');
    }
  }

}
