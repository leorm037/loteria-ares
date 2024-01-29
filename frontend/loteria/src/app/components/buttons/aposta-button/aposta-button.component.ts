import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-aposta-button',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './aposta-button.component.html',
  styleUrl: './aposta-button.component.css'
})
export class ApostaButtonComponent {

  @Input() link:string = "";

}
