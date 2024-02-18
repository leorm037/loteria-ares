import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Concurso } from './../interface/concurso.interface';
import { environment } from './../../environments/environment';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class ConcursoService {
  constructor(
    private http: HttpClient,
    private tokenService: TokenService
    ) {}

  listar(loteriaId: number): Observable<Concurso[]> {
    const token = this.tokenService.get()
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });

    return this.http.get<Concurso[]>(
      `${environment.apiUrl}/concurso?loteria_id=${loteriaId}`,
      { headers }
    );
  }
}
