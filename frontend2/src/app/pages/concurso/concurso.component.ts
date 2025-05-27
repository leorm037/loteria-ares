import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { catchError, EMPTY, Observable } from 'rxjs';
import { Loteria } from '../../interfaces/loteria';
import { LoteriaService } from '../../services/loteria.service';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { Breadcrumb } from '../../interfaces/breadcrumb';
import { BreadcrumbService } from '../../services/breadcrumb.service';
import { MessageAlertService } from '../../services/message-alert.service';
import { MessageAlertType } from '../../enum/message-alert-type';

@Component({
  selector: 'app-concurso',
  imports: [AsyncPipe, NgbAlertModule],
  templateUrl: './concurso.component.html'
})
export class ConcursoComponent implements OnInit {

  loterias$!: Observable<Loteria[]>;

  private readonly breadcrumbs: Breadcrumb[] = [
    {
      iconClass: "bi bi-suit-club-fill",
      texto: "Concurso"
    }
  ];

  constructor(
    private service: LoteriaService,
    private breadcrumbService: BreadcrumbService,
    private messageAlertService: MessageAlertService
  ) { }

  ngOnInit(): void {
    this.loterias$ = this.service.listAll().pipe(
      catchError((error) => {
        console.error(error);
        this.messageAlertService.sendMessagesAlert([{
          type: MessageAlertType.DANGER,
          message: "Não foi possível recuperar a lista de loterias. Tente carregar novamente"
        }]);
        return EMPTY
      })
    )

    this.breadcrumbService.sendBreadcrumb(this.breadcrumbs);
  }

}
