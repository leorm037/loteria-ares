import { HttpClient, HttpResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { jwtDecode } from "jwt-decode";
import { UserToken } from '../models/user-token.model';
import { UserAuth } from '../models/user-auth.model';
import { API_BASE_URL, LOGGER_FN } from '../tokens';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiBaseUrl = inject(API_BASE_URL);

  private readonly apiUrl = `${this.apiBaseUrl}/login_check`;

  public userSubject = new BehaviorSubject<UserAuth | null>(null);

  public user$ = this.userSubject.asObservable();

  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService,
    private router: Router
  ) {}

  public isLoggedIn(): boolean {
    return this.tokenService.hasToken();
  }

  public hasRole(role: string): boolean {
    const userAuthenticated = this.userSubject.value;
    if (userAuthenticated) {
      return userAuthenticated.roles.includes(role);
    }
    return false;
  }

  private decodificarToken(): void {
    const token = this.tokenService.getToken();
    const userAuthenticated = jwtDecode(token) as UserAuth;

    this.userSubject.next(userAuthenticated);
  }

  public authenticate(user: string, pass: string): Observable<HttpResponse<UserToken>> {
    const authData = { 
      username: user, 
      password: pass
    };

    return this.httpClient.post<UserToken>(this.apiUrl, authData, { observe: 'response' })
    .pipe(
      tap((response) => {
        const token: string = response.body?.token || '';
        this.tokenService.save(token);
        this.decodificarToken();
      })
    );
  }

  public getToken(): string {
    return this.tokenService.getToken();
  }

  public logOut(): void {
    this.tokenService.remove();
    this.userSubject.next(null);
    this.router.navigateByUrl('/login');
  }

}