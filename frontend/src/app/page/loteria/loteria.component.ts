import { Component, OnInit } from '@angular/core';
import { Loteria } from './../../interface/loteria.interface';
import { LoteriaService } from '../../service/loteria.service';

@Component({
  selector: 'app-loteria',
  standalone: true,
  imports: [],
  templateUrl: './loteria.component.html',
  styleUrl: './loteria.component.css',
})
export class LoteriaComponent implements OnInit {
  loterias: Loteria[] = [];

  constructor(private service: LoteriaService) {}

  ngOnInit(): void {
    this.service.listar().subscribe({
      next: (loterias) => {
        this.loterias = loterias;
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {},
    });
  }

  intervaloMinMax(value: Array<number>): string {
    const min: number = Math.min(...value);
    const max: number = Math.max(...value);

    return `${min.toString().padStart(2, '0')} a ${max
      .toString()
      .padStart(2, '0')}`;
  }
}
