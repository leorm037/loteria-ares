import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { MessageAlert } from '../../interfaces/message-alert';
import { MessageAlertType } from '../../enum/message-alert-type';
import { catchError, EMPTY, Observable } from 'rxjs';
import { Loteria } from '../../interfaces/loteria';
import { LoteriaService } from '../../services/loteria.service';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { Breadcrumb } from '../../interfaces/breadcrumb';
import { BreadcrumbService } from '../../services/breadcrumb.service';

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

  private readonly breadcrumbs: Breadcrumb[] = [
    {
      iconClass: "bi bi-suit-club-fill",
      texto: "Concurso"
    }
  ];

  constructor(
    private service: LoteriaService,
    private breadcrumbService: BreadcrumbService
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

    this.breadcrumbService.sendBreadcrumb(this.breadcrumbs);
  }

}
