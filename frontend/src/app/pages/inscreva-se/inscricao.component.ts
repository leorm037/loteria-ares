import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { camposIguaisValidator } from '../../validators/campos-iguais-validator';
import { MessageAlertType } from '../../enum/message-alert-type';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { BreadcrumbService } from '../../services/breadcrumb.service';
import { Breadcrumb } from '../../interfaces/breadcrumb';
import { MessageAlertService } from '../../services/message-alert.service';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-inscricao',
  imports: [ReactiveFormsModule, NgbAlertModule],
  templateUrl: './inscricao.component.html'
})
export class InscricaoComponent implements OnInit {

  private readonly breadcrumbs: Breadcrumb[] = [
    {
      iconClass: "bi bi-person-add",
      texto: "Inscreva-se"
    }
  ];

  public inscricaoForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: UsuarioService,
    private router: Router,
    private breadcrumbService: BreadcrumbService,
    private messageAlertService: MessageAlertService
  ) { }

  ngOnInit(): void {
    this.inscricaoForm = this.formBuilder.group({
      nomeCompleto: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required]],
      senhaConfirmar: [null, [Validators.required]]
    }, { validators: camposIguaisValidator('senha', 'senhaConfirmar') }
    );

    this.breadcrumbService.sendBreadcrumb(this.breadcrumbs);

  }

  public inscrever() {
    if (this.inscricaoForm.valid) {
      const usuario = {
        nome: this.inscricaoForm.get('nomeCompleto')?.value,
        email: this.inscricaoForm.get('email')?.value,
        plainPassword: this.inscricaoForm.get('senha')?.value
      };

      this.service.save(usuario).subscribe({
        next: (response) => {
          this.messageAlertService.sendMessagesAlert([{
            type: MessageAlertType.SUCCESS,
            message: response.message
          }]);
        },
        error: (error) => {
          console.log(error);
          this.messageAlertService.sendMessagesAlert([{
            type: MessageAlertType.DANGER,
            message: error
          }]);
        }
      });

      this.router.navigateByUrl('/entrar');

    } else {
      this.messageAlertService.sendMessagesAlert([{
        type: MessageAlertType.DANGER,
        message: 'Preencha os campos conforme instruções.'
      }]);
    }
  }

}
