import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Loteria } from './../interface/loteria.interface';

@Injectable({
  providedIn: 'root',
})
export class LoteriaService {
  constructor(private http: HttpClient) {}

  public listar(): Observable<Loteria[]> {
    return this.http.get<Loteria[]>(`${environment.apiUrl}/loteria`);
  }
}
