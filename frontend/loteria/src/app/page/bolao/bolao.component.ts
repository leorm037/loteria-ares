import { Component, OnInit } from '@angular/core';
import { Bolao } from '../../interface/bolao.internface';
import { BolaoService } from '../../service/bolao.service';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { ExcluirButtonComponent } from './../../components/buttons/excluir-button/excluir-button.component';
import { ApostaButtonComponent } from './../../components/buttons/aposta-button/aposta-button.component';
import { AlterarButtonComponent } from './../../components/buttons/alterar-button/alterar-button.component';
import { ApostadorButtonComponent } from './../../components/buttons/apostador-button/apostador-button.component';
import { NovoButtonComponent } from './../../components/buttons/novo-button/novo-button.component';

@Component({
  selector: 'app-bolao',
  standalone: true,
  imports: [
    RouterLink,
    CurrencyPipe,
    ExcluirButtonComponent,
    ApostaButtonComponent,
    AlterarButtonComponent,
    ApostadorButtonComponent,
    NovoButtonComponent
  ],
  templateUrl: './bolao.component.html',
  styleUrl: './bolao.component.css',
})
export class BolaoComponent implements OnInit {
  boloes: Bolao[] = [];

  constructor(private service: BolaoService) {}

  ngOnInit(): void {
    this.service.listar().subscribe({
      next: (boloes) => this.boloes = boloes,
      error: (error) => console.error(error)
    });
  }
}
