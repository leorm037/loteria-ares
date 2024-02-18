import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Loteria } from './../interface/loteria.interface';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class LoteriaService {
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  public listar(): Observable<Loteria[]> {
    const token = this.tokenService.get()
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });

    return this.http.get<Loteria[]>(
      `${environment.apiUrl}/loteria`,
      { headers }
    );
  }
}
