import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_BASE_URL, LOGGER_FN, Loteria, LoteriaPaginator } from '@app/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoteriaService {

  private logger = inject(LOGGER_FN);
  private apiBaseUrl = inject(API_BASE_URL);
  private httpClient: HttpClient = inject(HttpClient);

  private readonly apiUrl = `${this.apiBaseUrl}/loterias`;

  public get(page: number = 1, pageSize: number = 10): Observable<LoteriaPaginator> {
    const params = new HttpParams()
      .set('_page', page)
      .set('_per_page', pageSize);

      this.logger(`${this.apiUrl} \ ${params}`);

    return this.httpClient.get<LoteriaPaginator>(this.apiUrl, { params });
  }

  public getById(uuid: string): Observable<Loteria> {
    return this.httpClient.get<Loteria>(`${this.apiUrl}/${uuid}`);
  }

  public save(loteria: Loteria): Observable<Loteria> {
    return this.httpClient.post<Loteria>(`${this.apiUrl}/${loteria.id}`, loteria);
  }

  public update(loteria: Loteria): Observable<Loteria> {
    return this.httpClient.put<Loteria>(`${this.apiUrl}/${loteria.id}`, loteria);
  }
}
