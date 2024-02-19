import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Apostador } from '../../../interface/apostador.interface';
import { BolaoApostadorService } from './../../../service/bolao-apostador.service';
import { BolaoCabecalhoComponent } from './../../../components/bolao-cabecalho/bolao-cabecalho.component';
import { Bolao } from '../../../interface/bolao.internface';
import { BolaoService } from '../../../service/bolao.service';

@Component({
  selector: 'app-bolao-apostador',
  standalone: true,
  imports: [RouterLink, BolaoCabecalhoComponent],
  templateUrl: './bolao-apostador.component.html',
  styleUrl: './bolao-apostador.component.css'
})
export class BolaoApostadorComponent implements OnInit {
  apostadores: Apostador[] = [];
  bolaoId: string = "0";

constructor(
  private bolaoApostadorService: BolaoApostadorService,
  private activedRoute: ActivatedRoute
) {}

  ngOnInit(): void {
    this.activedRoute.paramMap.subscribe(
      paramMap => {
        this.bolaoId = paramMap.get('id') || "0";
      }
    );

    this.bolaoApostadorService.listar(this.bolaoId).subscribe({
      next: (apostadores) => this.apostadores = apostadores,
      error: (error) => console.error(error)
    });
  }


}
