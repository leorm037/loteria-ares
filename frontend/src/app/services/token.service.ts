import { Injectable } from '@angular/core';

const KEY_TOKEN = 'token_autenticacao';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  public save(token: string): void {
    localStorage.setItem(KEY_TOKEN, token);
  }

  public getToken(): string {
    return localStorage.getItem(KEY_TOKEN) ?? '';
  }

  public hasToken(): boolean {
    return !!this.getToken();
  }
  
  public remove(): void {
    localStorage.removeItem(KEY_TOKEN);
  }
  
}
