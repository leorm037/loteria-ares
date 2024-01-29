import { Component, Input, OnInit, Output } from '@angular/core';
import { Bolao } from './../../interface/bolao.internface';
import { BolaoService } from '../../service/bolao.service';

@Component({
  selector: 'app-bolao-cabecalho',
  standalone: true,
  imports: [],
  templateUrl: './bolao-cabecalho.component.html',
  styleUrl: './bolao-cabecalho.component.css'
})
export class BolaoCabecalhoComponent implements OnInit {

  @Input() bolaoId: string = "0";
  @Output() bolao: Bolao = {
    id: 0,
    nome: "",
    concurso: {
      id: 0,
      numero: 0,
      apuracao: new Date(),
      rateio: [],
      local: "",
      municipio: "",
      uf: "",
      loteria: {
        id: 0,
        nome: "",
        slug: "",
        api: "",
        logo: "",
        dezenas: [],
        premiar: [],
        marcar: [],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      dezenas: [],
      createdAt: new Date(),
      updatedAt: new Date()
    },
    conferido: false,
    apostadores: [],
    apostas: [],
    cotaValor: 0,
    createdAt: new Date(),
    updatedAt: new Date()
  };

  constructor(private bolaoService: BolaoService) {}

  ngOnInit(): void {
    this.bolaoService.getById(this.bolaoId!).subscribe({
      next: (bolao) => this.bolao = bolao,
      error: (error) => console.error(error)
    });
  }
}
