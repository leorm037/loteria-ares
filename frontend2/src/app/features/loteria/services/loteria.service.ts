import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_BASE_URL, Loteria, LoteriaPaginator } from '@app/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoteriaService {

  private apiBaseUrl = inject(API_BASE_URL);
  private httpClient: HttpClient = inject(HttpClient);

  private readonly apiUrl = `${this.apiBaseUrl}/loterias`;

  public get(page: number = 1, pageSize: number = 10): Observable<LoteriaPaginator> {
    const params = new HttpParams()
      .set('_page', page)
      .set('_per_page', pageSize);

    return this.httpClient.get<LoteriaPaginator>(this.apiUrl, { params });
  }

  public save(loteria: Loteria): Observable<Loteria> {
    return this.httpClient.post<Loteria>(this.apiUrl, loteria);
  }
}
