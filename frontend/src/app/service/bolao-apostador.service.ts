import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apostador } from '../interface/apostador.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BolaoApostadorService {

  constructor(private http: HttpClient) { }

  listar(bolaoId: string): Observable<Apostador[]> {
    return this.http.get<Apostador[]>(
      `${ environment.apiUrl }/apostador?bolao_id=${ bolaoId }`
    );
  }

}
