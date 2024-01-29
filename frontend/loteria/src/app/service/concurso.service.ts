import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Concurso } from './../interface/concurso.interface';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ConcursoService {
  constructor(private http: HttpClient) {}

  listar(loteriaId: number): Observable<Concurso[]> {
    return this.http.get<Concurso[]>(
      `${environment.apiUrl}/concurso?loteria_id=${loteriaId}`
    );
  }
}
