import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { UsuarioAutenticacao } from '../interfaces/usuario-autenticacao';
import { UsuarioToken } from '../interfaces/usuario-token';
import { TokenService } from './token.service';
import { jwtDecode } from "jwt-decode";
import { UsuarioAutenticado } from '../interfaces/usuario-autenticado';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  private readonly urlApi = `${environment.apiUrl}/login_check`;

  private hasUsuarioSubject = new BehaviorSubject<UsuarioAutenticado | null>(null);

  public hasUsuario$ = this.hasUsuarioSubject.asObservable();

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { 
    if (this.tokenService.hasToken()) {
      this.decodificarToken();
    }
  }

  public hasUsuario(): boolean {
    return this.hasUsuarioSubject.value !== null;
  }

  public hasRole(role: string): boolean {
    const usuarioAutenticado = this.hasUsuarioSubject.value;
    
    if (usuarioAutenticado) {
      return usuarioAutenticado.roles.includes(role);
    }
    return false;
  }

  public decodificarToken() {
      const token = this.tokenService.getToken();
      const usuarioAutenticado = jwtDecode(token) as UsuarioAutenticado;
      
      this.hasUsuarioSubject.next(usuarioAutenticado);
  }

  public logOut() {
    this.tokenService.remove();
    this.hasUsuarioSubject.next(null);
  }

  public autenticacao(email: string, senha: string): Observable<any> {
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
