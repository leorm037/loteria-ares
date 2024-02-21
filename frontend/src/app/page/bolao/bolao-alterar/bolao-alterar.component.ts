import { LoteriaService } from './../../../service/loteria.service';
import { Loteria } from './../../../interface/loteria.interface';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-bolao-alterar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './bolao-alterar.component.html',
  styleUrl: './bolao-alterar.component.css',
})
export class BolaoAlterarComponent implements OnInit {
  loterias: Loteria[] = [];

  constructor(private loteriaService: LoteriaService) {}

  ngOnInit(): void {
    this.loteriaService.listar().subscribe({
      next: (loterias) => (this.loterias = loterias),
      error: (error) => console.error(error),
    });
  }
}
