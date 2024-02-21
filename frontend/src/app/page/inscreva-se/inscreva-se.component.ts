import { Component, OnInit } from '@angular/core';
import { LimparButtonComponent } from '../../components/buttons/limpar-button/limpar-button.component';
import { EnviarButtonComponent } from './../../components/buttons/enviar-button/enviar-button.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';
import { UsuarioService } from './../../service/usuario.service';
import { Usuario } from '../../interface/usuario.interface';

@Component({
  selector: 'app-inscreva-se',
  standalone: true,
  imports: [EnviarButtonComponent, LimparButtonComponent, FormsModule, ReactiveFormsModule, NgClass],
templateUrl: './inscreva-se.component.html',
  styleUrl: './inscreva-se.component.css',
})
export class InscrevaSeComponent implements OnInit {

  public form!: FormGroup;

  constructor(
    private router: Router,
    private service: UsuarioService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome: [null, [Validators.required]],
      celular: [null],
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required, Validators.minLength(6)]]
    });

  }

  public inscrevaSe(): void {
    if(this.form.valid){
      this.service.inscrevaSe(this.getUsuario()).subscribe({
        next: (value) => {
          console.log(value);
          this.router.navigateByUrl('/entrar');
        },
        error: (error) => {
          console.log("Inscrição não realizada.", error);
        }
      });
    } else {
      this.form.markAllAsTouched();
      this.form.markAsDirty();
    }
  }

  private getUsuario(): Usuario {
    return {
      nome: this.form.value.nome,
      celular: this.form.value.celular,
      email: this.form.value.email,
      senha: this.form.value.senha
    };
  }
}
