import { Component } from '@angular/core';
import { AutenticacaoService } from '../../core/services/autenticacao.service';
import { AsyncPipe } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-cabecalho',
  imports: [
    AsyncPipe, 
    BreadcrumbComponent,
    RouterModule
  ],
  templateUrl: './cabecalho.component.html'
})
export class CabecalhoComponent {

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
