import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoteriaService } from '../../service/loteria.service';
import { Loteria } from '../../interface/loteria';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-loteria',
  imports: [RouterModule, DatePipe],
  templateUrl: './loteria.component.html'
})
export class LoteriaComponent implements OnInit {
  
  loterias!: Loteria[];

  constructor(
    private service: LoteriaService
  ) {}

  ngOnInit(): void {
    this.service.listAll().subscribe({
      next: loterias => this.loterias = loterias,
      error: error => console.error(error)
    });
  }

}
