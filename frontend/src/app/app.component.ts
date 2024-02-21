import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { environment } from './../environments/environment';
import { LoadingComponent } from './components/loading/loading.component';
import { MensagemComponent } from './components/mensagem/mensagem.component';
import { ToasterComponent } from './components/toaster/toaster.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent, LoadingComponent, MensagemComponent,ToasterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  public constructor(){}

  version: string = environment.version;
}
