import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoteriaService } from '../../services/loteria.service';
import { Loteria } from '../../interfaces/loteria';
import { DatePipe, AsyncPipe } from '@angular/common';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { MessageAlert } from '../../interfaces/message-alert';
import { MessageAlertType } from '../../enum/message-alert-type';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { Breadcrumb } from '../../interfaces/breadcrumb';
import { BreadcrumbService } from '../../services/breadcrumb.service';

@Component({
  selector: 'app-loteria',
  imports: [RouterModule, DatePipe, AsyncPipe, NgbAlertModule],
  templateUrl: './loteria.component.html'
})
export class LoteriaComponent implements OnInit {

  loterias$!: Observable<Loteria[]>;
  totalRegistros$!: Observable<number>;

  private readonly breadcrumbs: Breadcrumb[] = [
    {
      iconClass: "fa-solid fa-clover icon-rotate-45",
      texto: "Loteria"
    }
  ];

  messageAlert: MessageAlert = { type: MessageAlertType.INFO, message: "Mensagem", show: false };

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
          message: 'Ops! Não foi possível recuperar a lista de loterias. Tente carregar novamente.',
          show: true
        };
        return EMPTY;
      })
    );

    this.totalRegistros$ = this.loterias$.pipe(
      map(dados => dados.length),
      catchError((error) => {
        return EMPTY;
      })
    );

    this.breadcrumbService.sendBreadcrumb(this.breadcrumbs);
  }

}