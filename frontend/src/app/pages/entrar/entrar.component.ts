import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AutenticacaoService } from '../../services/autenticacao.service';
import { Breadcrumb } from '../../interfaces/breadcrumb';
import { BreadcrumbService } from '../../services/breadcrumb.service';

@Component({
  selector: 'app-entrar',
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './entrar.component.html'
})
export class EntrarComponent implements OnInit {

  public autenticacaoForm!: FormGroup;

  private readonly breadcrumbs: Breadcrumb[] = [
    {
      iconClass: "bi bi-door-closed",
      texto: "Entrar"
    }
  ];

  constructor(
    private formBuilder: FormBuilder,
    private service: AutenticacaoService,
    private router: Router,
    private breadcrumbService: BreadcrumbService
  ) { }

  ngOnInit(): void {
    this.autenticacaoForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      senha: [null, Validators.required],
      lembrar: [false]
    });

    this.breadcrumbService.sendBreadcrumb(this.breadcrumbs);
  }

  public autenticar() {
    if (this.autenticacaoForm.valid) {
      const email = this.autenticacaoForm.value.email;
      const senha = this.autenticacaoForm.value.senha;

      this.service.autenticacao(email, senha).subscribe({
        next: data => console.log(data),
        error: error => console.error(error)
      });

      console.log("formulario valido", this.autenticacaoForm.value);
    } else {
      console.error("formulario invalido", this.autenticacaoForm.value);
    }

    this.router.navigateByUrl('/');
  }
}
