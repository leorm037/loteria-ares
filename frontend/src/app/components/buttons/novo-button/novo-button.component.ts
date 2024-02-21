import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-novo-button',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './novo-button.component.html',
  styleUrl: './novo-button.component.css'
})
export class NovoButtonComponent {

  @Input() link: string = "";

}
