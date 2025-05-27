import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment.development';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html'
})
export class FooterComponent {

  public version: string = environment.version;

}
