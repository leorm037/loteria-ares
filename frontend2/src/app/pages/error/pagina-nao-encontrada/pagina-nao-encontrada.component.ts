import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from '../../../interfaces/breadcrumb';
import { BreadcrumbService } from '../../../services/breadcrumb.service';

@Component({
  selector: 'app-pagina-nao-encontrada',
  imports: [],
  templateUrl: './pagina-nao-encontrada.component.html',
  styleUrl: './pagina-nao-encontrada.component.css'
})
export class PaginaNaoEncontradaComponent implements OnInit {

    constructor(
        private breadcrumbService: BreadcrumbService
    ) {}

    private readonly breadcrumbs: Breadcrumb[] = [
      {
        iconClass: "fa-solid fa-toilet-paper-slash",
        texto: "Página não encontrada"
      }
    ];

    ngOnInit(): void {
      this.breadcrumbService.sendBreadcrumb(this.breadcrumbs);
    }

}
