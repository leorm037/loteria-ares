import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { camposIguaisValidator } from '../../validators/campos-iguais-validator';
import { AutenticacaoService } from '../../services/autenticacao.service';
import { MessageAlert } from '../../interface/message-alert';
import { MessageAlertType } from '../../enum/message-alert-type';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-inscricao',
  imports: [ReactiveFormsModule, NgbAlertModule],
  templateUrl: './inscricao.component.html'
})
export class InscricaoComponent implements OnInit {

  public inscricaoForm!: FormGroup;

  public messageAlert: MessageAlert = { type: MessageAlertType.INFO, message: "Mensagem", show: false };

  constructor(
    private formBuilder: FormBuilder,
    private service: AutenticacaoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.inscricaoForm = this.formBuilder.group({
      nomeCompleto: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required]],
      senhaConfirmar: [null, [Validators.required]]
    }, { validators: camposIguaisValidator('senha', 'senhaConfirmar') });

  }

  public inscrever() {
    if (this.inscricaoForm.valid) {
      this.router.navigateByUrl('/autenticacao');
    } else {
      this.messageAlert = {
        type: MessageAlertType.DANGER,
        message: 'Preencha os campos conforme instruções.',
        show: true
      };

    }
  }

}
