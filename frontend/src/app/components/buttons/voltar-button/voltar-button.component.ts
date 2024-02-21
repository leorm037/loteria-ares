import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-voltar-button',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './voltar-button.component.html',
  styleUrl: './voltar-button.component.css'
})
export class VoltarButtonComponent {

  @Input() link: string = "";

}
