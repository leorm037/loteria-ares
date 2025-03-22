import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacaoService } from '../../services/autenticacao.service';

@Component({
  selector: 'app-autenticacao',
  imports: [ReactiveFormsModule],
  templateUrl: './autenticacao.component.html'
})
export class AutenticacaoComponent implements OnInit {

  autenticacaoForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: AutenticacaoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.autenticacaoForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      senha: [null, Validators.required]
    });
  }

  public autenticar() {
    if (this.autenticacaoForm.valid) {
      const email = this.autenticacaoForm.value.email;
      const senha = this.autenticacaoForm.value.senha;

      this.service.autenticacao(email,senha).subscribe({
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
