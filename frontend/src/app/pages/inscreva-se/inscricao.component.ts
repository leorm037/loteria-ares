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
import { ErrorRequest } from '../../interfaces/error-request';

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
        nome: this.inscricaoForm.value.nomeCompleto,
        email: this.inscricaoForm.value.email,
        plainPassword: this.inscricaoForm.value.senha,
      };

      this.service.save(usuario).subscribe({
        next: (response) => {
          this.messageAlertService.sendMessagesAlert([{
            type: MessageAlertType.SUCCESS,
            message: response.message
          }]);

          this.router.navigateByUrl('/entrar');
        },
        error: (e) => {
          if(e?.statusText == "Unknown Error") {
            this.messageAlertService.sendMessagesAlert([{
              type: MessageAlertType.DANGER,
              message: e.message
            }]);
          } else {
            const error = e.error as ErrorRequest;
            
            for (const msg of error.detail) {
              this.messageAlertService.sendMessagesAlert([{
                type: MessageAlertType.DANGER,
                message: msg
              }]);
            }
          }
        }
      });
    } else {
      this.messageAlertService.sendMessagesAlert([{
        type: MessageAlertType.DANGER,
        message: 'Preencha todos os campos corretamente.'
      }]);
    }
  }

}
