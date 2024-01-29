import { LoteriaService } from './../../../service/loteria.service';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Loteria } from '../../../interface/loteria.interface';
import { SalvarButtonComponent } from './../../../components/buttons/salvar-button/salvar-button.component';
import { LimparButtonComponent } from './../../../components/buttons/limpar-button/limpar-button.component';
import { VoltarButtonComponent } from './../../../components/buttons/voltar-button/voltar-button.component';

@Component({
  selector: 'app-bolao-novo',
  standalone: true,
  imports: [
    RouterLink,
    SalvarButtonComponent,
    LimparButtonComponent,
    VoltarButtonComponent
  ],
  templateUrl: './bolao-novo.component.html',
  styleUrl: './bolao-novo.component.css',
})
export class BolaoNovoComponent implements OnInit {
  loterias: Loteria[] = [];

  constructor(private loteriaService: LoteriaService) {}

  ngOnInit(): void {
    this.loteriaService.listar().subscribe({
        next: (loterias) => this.loterias = loterias,
        error: (error) => console.error(error)
    });
  }
}
