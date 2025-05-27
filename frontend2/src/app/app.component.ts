import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessageAlertComponent } from "./componentes/message-alert/message-alert.component";
import { LoadingComponent } from "./componentes/loading/loading.component";
import { RodapeComponent } from "./componentes/rodape/rodape.component";
import { CabecalhoComponent } from "./componentes/cabecalho/cabecalho.component";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MessageAlertComponent,
    LoadingComponent,
    RodapeComponent,
    CabecalhoComponent
],
  templateUrl: './app.component.html'
})
export class AppComponent {

}
