import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_BASE_URL, Loteria } from '@app/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoteriaService {

  private apiBaseUrl = inject(API_BASE_URL);
  private httpClient: HttpClient = inject(HttpClient);

  private readonly apiUrl = `${this.apiBaseUrl}/loterias`;

  public get(): Observable<Loteria[]> {
    return this.httpClient.get<Loteria[]>(this.apiUrl);
  }

  public save(loteria: Loteria): Observable<Loteria> {
    return this.httpClient.post<Loteria>(this.apiUrl, loteria);
  }
}
