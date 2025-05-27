import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { UsuarioAutenticacao } from '../../interfaces/usuario-autenticacao';
import { UsuarioToken } from '../../interfaces/usuario-token';
import { TokenService } from './token.service';
import { jwtDecode } from "jwt-decode";
import { UsuarioAutenticado } from '../../interfaces/usuario-autenticado';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  private readonly urlApi = `${environment.apiUrl}/login_check`;

  private usuarioSubject = new BehaviorSubject<UsuarioAutenticado | null>(null);

  public usuario$ = this.usuarioSubject.asObservable();

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { 
    if (this.tokenService.hasToken()) {
      this.decodificarToken();
    }
  }

  public isLoggedIn(): boolean {
    const exp = this.usuarioSubject.value?.exp || 0;
    const agora = Math.floor(Date.now() / 1000);

    if (exp > agora) {
      return true;
    }
    
    this.logOut();
    return false;
  }

  public hasRole(role: string): boolean {
    const usuarioAutenticado = this.usuarioSubject.value;
    
    if (usuarioAutenticado) {
      return usuarioAutenticado.roles.includes(role);
    }
    return false;
  }

  public decodificarToken(): void {
      const token = this.tokenService.getToken();
      const usuarioAutenticado = jwtDecode(token) as UsuarioAutenticado;
      
      this.usuarioSubject.next(usuarioAutenticado);
  }

  public logOut() {
    this.tokenService.remove();
    this.usuarioSubject.next(null);
  }

  public autenticacao(email: string, senha: string): Observable<HttpResponse<UsuarioToken>> {
    const autenticacao: UsuarioAutenticacao = {
      username: email,
      password: senha
    };

    return this.http.post<UsuarioToken>(this.urlApi, autenticacao, {observe: 'response'})
      .pipe(
        tap((response) => {
          const token: string = response.body?.token || '';
          this.tokenService.save(token);
          this.decodificarToken();
        })
      );
  }
}
