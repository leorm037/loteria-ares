import { HttpClient, HttpResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { jwtDecode } from "jwt-decode";
import { UserToken } from '../models/user-token.model';
import { UserAuth } from '../models/user-auth.model';
import { API_BASE_URL, LOGGER_FN } from '../tokens';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private logger = inject(LOGGER_FN);
  private apiBaseUrl = inject(API_BASE_URL);
  private http: HttpClient = inject(HttpClient);
  private tokenService: TokenService = inject(TokenService);

  private readonly apiUrl = `${this.apiBaseUrl}/login_check`;

  public userSubject = new BehaviorSubject<UserAuth | null>(null);

  public user$ = this.userSubject.asObservable();

  public isLoggedIn(): boolean {
    const exp = this.userSubject.value?.exp || 0;
    const now = Math.floor(Date.now() / 1000);

    if (exp > now) {
      return true;
    }

    this.logOut();
    return false;
  }

  public hasRole(role: string): boolean {
    const userAuthenticated = this.userSubject.value;
    if (userAuthenticated) {
      return userAuthenticated.roles.includes(role);
    }
    return false;
  }

  public decodificarToken(): void {
    const token = this.tokenService.getToken();
    const userAuthenticated = jwtDecode(token) as UserAuth;

    this.logger(`core.AuthService.decodificarToken: ${userAuthenticated}`);

    this.userSubject.next(userAuthenticated);
  }

  public authenticate(user: string, pass: string): Observable<HttpResponse<UserToken>> {
    const authData = { 
      username: user, 
      password: pass
    };

    return this.http.post<UserToken>(this.apiUrl, authData, { observe: 'response' })
    .pipe(
      tap((response) => {
        const token: string = response.body?.token || '';
        this.tokenService.save(token);
        this.decodificarToken();
      })
    );
  }

  public logOut(): void {
    this.tokenService.remove();
    this.userSubject.next(null);
  }

}