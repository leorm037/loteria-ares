import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { MessageAlert } from '../../interface/message-alert';
import { MessageAlertType } from '../../enum/message-alert-type';
import { catchError, EMPTY, Observable } from 'rxjs';
import { Loteria } from '../../interface/loteria';
import { LoteriaService } from '../../services/loteria.service';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-concurso',
  imports: [AsyncPipe, NgbAlertModule],
  templateUrl: './concurso.component.html'
})
export class ConcursoComponent implements OnInit {

  loterias$!: Observable<Loteria[]>;
  messageAlert: MessageAlert = {
    type: MessageAlertType.INFO,
    message: "Mensagem",
    show: true
  };

  constructor(
    private service: LoteriaService
  ) { }

  ngOnInit(): void {
    this.loterias$ = this.service.listAll().pipe(
      catchError((error) => {
        console.error(error);
        this.messageAlert = {
          type: MessageAlertType.DANGER,
          message: "Não foi possível recuperar a lista de loterias. Tente carregar novamente",
          show: true
        }
        return EMPTY
      })
    )
  }

}
