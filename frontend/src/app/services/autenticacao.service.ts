import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  private readonly urlApi = `${environment.apiUrl}/autenticacao`;

  constructor(
    private http: HttpClient
  ) { }

  public autenticacao(email: string, senha: string): Observable<any> {
    return this.http.post(`${this.urlApi}/login`, {email, senha});
  }
}
