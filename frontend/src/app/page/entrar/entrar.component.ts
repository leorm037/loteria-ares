import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../interface/usuario.interface';
import {
  FormGroup,
  ReactiveFormsModule,
  FormBuilder,
  Form,
  Validators,
} from '@angular/forms';
import { EntrarButtonComponent } from '../../components/buttons/entrar-button/entrar-button.component';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../../service/usuario.service';
import { Router } from '@angular/router';

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
    private usuarioService: UsuarioService
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
        next: (value) => {
          this.router.navigate(['/'])
          this.form.reset();
        },
        error: (err) => {
          console.log('Entrar: ', err);
        }
      });
    } else {
      this.form.markAllAsTouched();
      this.form.markAsDirty();
    }
  }
}
