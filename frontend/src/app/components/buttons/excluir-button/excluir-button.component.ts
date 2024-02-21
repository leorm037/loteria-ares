import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-excluir-button',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './excluir-button.component.html',
  styleUrl: './excluir-button.component.css'
})
export class ExcluirButtonComponent {

  @Input() link: string = "";

}
