import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-alterar-button',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './alterar-button.component.html',
  styleUrl: './alterar-button.component.css'
})
export class AlterarButtonComponent {

  @Input() link: string = "";

}
