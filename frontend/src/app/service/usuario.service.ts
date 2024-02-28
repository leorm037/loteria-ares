import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from './../interface/usuario.interface';
import { MessageResponse } from './../interface/messageResponse.interface';
import { AuthResponse } from './../interface/auth-response.interface';
import { environment } from './../../environments/environment';
import { BehaviorSubject, EMPTY, Observable, catchError, tap } from 'rxjs';
import { TokenService } from './token.service';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {

  private usuarioSubject = new BehaviorSubject<Usuario | null>(null);

  constructor(private http: HttpClient, private tokenService: TokenService) {
    if (this.tokenService.has()) {
      this.decodificarJWT();
    }
  }

  private decodificarJWT(): void {
    const token = this.tokenService.get();
    const usuario = jwtDecode(token) as Usuario;
    this.usuarioSubject.next(usuario);
  }

  public get() {
    return this.usuarioSubject.asObservable();
  }

  public salvarToken(token: string): void {
    this.tokenService.save(token);
    this.decodificarJWT();
  }

  public inscrevaSe(usuario: Usuario): Observable<MessageResponse> {
    const url = `${environment.apiUrl}/inscreva-se`;

    return this.http.post<MessageResponse>(url, usuario);
  }

  public entrar(username: string, password: string): Observable<HttpResponse<AuthResponse>> {
    const url = `${environment.apiUrl}/login_check`;

    return this.http.post<AuthResponse>(
        url,
        {
          'username': username,
          'password': password,
        },
        { observe: 'response' }
      )
      .pipe(
        tap({
          next: (response) => {
            const authToken = response.body?.token || '';
            this.tokenService.save(authToken);
            this.decodificarJWT();
          }
        }),
        catchError((error) => {
          console.log(error);
          return EMPTY;
        })
      );
  }

  public hasAuth() {
    return this.tokenService.has();
  }

  public sair() {
    this.tokenService.remove();
    this.usuarioSubject.next(null);
  }
}
