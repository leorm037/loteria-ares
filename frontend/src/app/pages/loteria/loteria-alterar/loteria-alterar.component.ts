import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-loteria-alterar',
  imports: [],
  templateUrl: './loteria-alterar.component.html',
  styleUrl: './loteria-alterar.component.css'
})
export class LoteriaAlterarComponent implements OnInit{
  
  loteriaUuid!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.loteriaUuid = String(this.route.snapshot.paramMap.get('uuid'));
  }
}
