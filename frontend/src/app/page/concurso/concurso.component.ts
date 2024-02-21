import { Component, OnInit } from '@angular/core';
import { Concurso } from './../../interface/concurso.interface';
import { Loteria } from './../../interface/loteria.interface';
import { ConcursoService } from './../../service/concurso.service';
import { CommonModule } from '@angular/common';
import { LoteriaService } from './../../service/loteria.service';
import { FormsModule } from '@angular/forms';
import { NovoButtonComponent } from '../../components/buttons/novo-button/novo-button.component';

@Component({
  selector: 'app-concurso',
  standalone: true,
  imports: [CommonModule, FormsModule, NovoButtonComponent],
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
    this.loteriaService.listar().subscribe({
      next: (loterias) => {
        this.loterias = loterias;
      },
      error: (error) => {
        console.error('ngOnInit: loterias' + error);
      },
      complete: () => {}
    });
  }

  formatDezenas(dezenas: Array<number>): string {
    return dezenas
      .map((dezena) => {
        return dezena.toString().padStart(2, '0');
      })
      .join(', ');
  }

  filtrarConcursoPorLoteria(): void {
    this.concursoService.listar(this.loteriaId).subscribe({
      next: (concursos) => {
        this.concursos = concursos;
      },
      error: (error) => {
        console.log('Listar concurso: ' + error);
      },
      complete: () => {

      }
    });
  }
}
