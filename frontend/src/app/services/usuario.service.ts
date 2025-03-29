import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../interfaces/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private readonly urlApi = `${environment.apiUrl}/usuarios`;

  constructor(
    private http: HttpClient
  ) { }

  public save(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.urlApi}`, usuario);
  }
}
