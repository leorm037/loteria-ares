import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { BreadcrumbComponent } from './componentes/breadcrumb/breadcrumb.component';
import { MessageAlertComponent } from "./componentes/message-alert/message-alert.component";
import { AutenticacaoService } from './services/autenticacao.service';
import { UsuarioAutenticado } from './interfaces/usuario-autenticado';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: '[app-root]',
  imports: [
    RouterModule, 
    RouterOutlet, 
    BreadcrumbComponent, 
    MessageAlertComponent,
    AsyncPipe
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {

  public usuario$;

  constructor(
    private autenticacaoService: AutenticacaoService,
    private router: Router
  ) { 
    this.usuario$ = this.autenticacaoService.hasUsuario$
  }

  public isAdmin(): boolean {
    return this.autenticacaoService.hasRole('ROLE_ADMIN');
  }

  public logout(): void {
    this.autenticacaoService.logOut();    
    this.router.navigateByUrl('/entrar');
  }

}
