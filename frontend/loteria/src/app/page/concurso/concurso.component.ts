import { Component, OnInit } from '@angular/core';
import { Concurso } from './../../interface/concurso.interface';
import { Loteria } from './../../interface/loteria.interface';
import { ConcursoService } from './../../service/concurso.service';
import { DatePipe } from '@angular/common';
import { LoteriaService } from './../../service/loteria.service';
import { FormsModule } from '@angular/forms';
import { NovoButtonComponent } from '../../components/buttons/novo-button/novo-button.component';

@Component({
  selector: 'app-concurso',
  standalone: true,
  imports: [
    DatePipe,
    FormsModule,
    NovoButtonComponent
  ],
  templateUrl: './concurso.component.html',
  styleUrl: './concurso.component.css',
})
export class ConcursoComponent implements OnInit {
  loterias: Loteria[] = [];
  concursos: Concurso[] = [];

  loteriaId: number = 0;

  constructor(
    private concursoService: ConcursoService,
    private loteriaService: LoteriaService
  ) {}

  ngOnInit(): void {
    this.loteriaService.listar().subscribe(
      (loterias) => {
        console.log("ngOnInit: loterias:" + loterias.length)
        this.loterias = loterias;
      },
      (error) => {
        console.error("ngOnInit: loterias" + error)
      },
      () => {
        console.log("ngOnInit: loterias: final")
      }
    );
  }

  formatDezenas(dezenas: Array<number>): string {
    return dezenas
      .map((dezena) => {
        return dezena.toString().padStart(2, '0');
      })
      .join(', ');
  }

  filtrarConcursoPorLoteria(): void {
    console.log("filtrarConcursoPorLoteria" + this.concursos.length);

    this.concursoService.listar(this.loteriaId).subscribe(
      (concursos) => {
        console.log("filtrarConcursoPorLoteria: " + concursos.length)
        this.concursos = concursos;
      },
      (error) => {
        console.error("filtrarConcursoPorLoteria:" + error)
      },
      () => {
        console.log("filtrarConcursoPorLoteria: final")
      }
    );
  }

}
