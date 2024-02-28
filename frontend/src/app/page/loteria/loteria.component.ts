import { Component, OnInit } from '@angular/core';
import { LoteriaService } from '../../service/loteria.service';
import { CommonModule } from '@angular/common';
import { IntervaloMinMaxPipe } from './../../pipes/intervalo-min-max.pipe';
import { Observable } from 'rxjs';
import { Loteria } from '../../interface/loteria.interface';

@Component({
  selector: 'app-loteria',
  standalone: true,
  imports: [CommonModule, IntervaloMinMaxPipe],
  templateUrl: './loteria.component.html',
  styleUrl: './loteria.component.css',
})
export class LoteriaComponent implements OnInit {
  public loterias$!: Observable<Loteria[]>;

  constructor(private service: LoteriaService) {}

  ngOnInit(): void {
    this.loterias$ = this.service.listar();
  }
}
