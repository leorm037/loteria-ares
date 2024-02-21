import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-apostador-button',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './apostador-button.component.html',
  styleUrl: './apostador-button.component.css'
})
export class ApostadorButtonComponent {

  @Input() link: string = "";

}
