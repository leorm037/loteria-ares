import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../interfaces/usuario';
import { Observable } from 'rxjs';
import { MessageResponse } from '../interfaces/message-response';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private readonly urlApi = `${environment.apiUrl}/usuarios`;

  constructor(
    private http: HttpClient
  ) { }

  public save(usuario: Usuario): Observable<MessageResponse> {
    return this.http.post<MessageResponse>(`${this.urlApi}`, usuario);
  }
}
