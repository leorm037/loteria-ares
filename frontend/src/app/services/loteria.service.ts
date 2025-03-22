import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Loteria } from '../interface/loteria';

@Injectable({
  providedIn: 'root'
})
export class LoteriaService {

  private readonly urlApi = `${environment.apiUrl}/loterias`;
  
  constructor(private http: HttpClient) { }

  public listAll(): Observable<Loteria[]> {
    return this.http.get<Loteria[]>(this.urlApi);
  }
}
