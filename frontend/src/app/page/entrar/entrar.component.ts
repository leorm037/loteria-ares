import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../interface/usuario.interface';
import {
  FormGroup,
  ReactiveFormsModule,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { EntrarButtonComponent } from '../../components/buttons/entrar-button/entrar-button.component';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../../service/usuario.service';
import { Router } from '@angular/router';
import { MensagemService } from './../../service/mensagem.service';

@Component({
  selector: 'app-entrar',
  standalone: true,
  imports: [ReactiveFormsModule, EntrarButtonComponent, CommonModule],
  templateUrl: './entrar.component.html',
  styleUrl: './entrar.component.css',
})
export class EntrarComponent implements OnInit {
  public form!: FormGroup;

  public usuario: Usuario = {
    email: '',
    senha: '',
    ficarConectado: false,
  };

  constructor(
    private formBuilder: FormBuilder,
    private service: UsuarioService,
    private router: Router,
    private usuarioService: UsuarioService,
    private msg: MensagemService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required]],
      ficarConectado: [false],
    });
  }

  public entrar(): void {
    if (this.form.valid) {
      const email = this.form.get('email')?.value;
      const senha = this.form.get('senha')?.value;

      this.service.entrar(email, senha).subscribe({
        next: () => {
          this.router.navigate(['/']);
          this.form.reset();
        }
      });
    } else {
      this.form.markAllAsTouched();
      this.form.markAsDirty();
    }
  }
}
