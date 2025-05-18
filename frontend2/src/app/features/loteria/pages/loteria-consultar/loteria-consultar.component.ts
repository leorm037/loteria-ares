import { Component, inject, OnInit } from '@angular/core';
import { LOGGER_FN, Loteria, LoteriaPaginator } from '@app/core';
import { LoteriaService } from '../../services/loteria.service';
import { RouterModule } from '@angular/router';
import { DatePipe, SlicePipe } from '@angular/common';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { Breadcrumb, BreadcrumbService } from '@app/shared';

@Component({
  selector: 'app-loteria-consultar',
  imports: [RouterModule, DatePipe, SlicePipe, NgbPaginationModule, FormsModule],
  templateUrl: './loteria-consultar.component.html',
  styleUrl: './loteria-consultar.component.css'
})
export class LoteriaConsultarComponent implements OnInit {

  public loterias: Loteria[] = [];

  public page: number = 1;
  public pageSize: number = 10;
  public collectionSize: number = 0;

  private logger = inject(LOGGER_FN);

  private readonly breadcrumbs: Breadcrumb[] = [
    {
      iconClass: "fa-solid fa-clover icon-rotate-45",
      value: "Loteria"
    }
  ];

  constructor(
    private breadcrumbService: BreadcrumbService,
    private service: LoteriaService
  ) {}

  ngOnInit(): void {
    this.atualizarLista();
    this.breadcrumbService.set(this.breadcrumbs);
  }

  public changePageSize(): void {
    this.page = 1;
    this.atualizarLista();
  }

  public changePage(page: number): void {
    this.page = page;
    this.atualizarLista();
  }

  public atualizarLista(): void {
    this.service.get(this.page, this.pageSize).subscribe({
      next: (loteriaPaginator) => {
        this.collectionSize = loteriaPaginator.items || 0;
        this.loterias = loteriaPaginator.data;
      },
      error: (error) => {
        this.logger(error.message);
      }
    });
  }

}
