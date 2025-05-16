import { Component, inject, OnInit } from '@angular/core';
import { LOGGER_FN, Loteria } from '@app/core';
import { LoteriaService } from '../../services/loteria.service';
import { RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-loteria-consultar',
  imports: [RouterModule, DatePipe],
  templateUrl: './loteria-consultar.component.html',
  styleUrl: './loteria-consultar.component.css'
})
export class LoteriaConsultarComponent implements OnInit {

  public loterias: Loteria[] = [];

  private logger = inject(LOGGER_FN);
  private service: LoteriaService = inject(LoteriaService);

  constructor() {

  }
  ngOnInit(): void {
    this.service.get().subscribe({
      next: (loterias: Loteria[]) => {
        this.loterias = loterias;
      },
      error: (error) => {
        this.logger(error.message);
      },
      complete: () => {
        this.logger('Loterias loaded');
      } 
    });
  }

}
