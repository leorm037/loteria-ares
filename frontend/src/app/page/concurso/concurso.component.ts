import { Component, OnInit } from '@angular/core';
import { Concurso } from './../../interface/concurso.interface';
import { Loteria } from './../../interface/loteria.interface';
import { ConcursoService } from './../../service/concurso.service';
import { CommonModule } from '@angular/common';
import { LoteriaService } from './../../service/loteria.service';
import { FormsModule } from '@angular/forms';
import { NovoButtonComponent } from '../../components/buttons/novo-button/novo-button.component';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-concurso',
  standalone: true,
  imports: [CommonModule, FormsModule, NovoButtonComponent],
  templateUrl: './concurso.component.html',
  styleUrl: './concurso.component.css',
})
export class ConcursoComponent implements OnInit {

  private concursosSubscription!: Subscription;

  concursos: Concurso[] = [];

  public loterias$!: Observable<Loteria[]>;

  loteriaId: number = 0;

  constructor(
    private concursoService: ConcursoService,
    private loteriaService: LoteriaService
  ) {}

  ngOnInit(): void {
    this.loterias$ = this.loteriaService.listar();
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
