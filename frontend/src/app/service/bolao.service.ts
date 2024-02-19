import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bolao } from './../interface/bolao.internface';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BolaoService {

  constructor(private http: HttpClient) { }

  listar(): Observable<Bolao[]> {
    return this.http.get<Bolao[]>(
      `${ environment.apiUrl }/bolao`
    );
  }

  getById(id: string): Observable<Bolao> {
    return this.http.get<Bolao>(
      `${ environment.apiUrl }/bolao/${id}`
    );
  }
}
