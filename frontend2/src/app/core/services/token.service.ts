import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private readonly KEY_TOKEN = 'token';

  public save(token: string): void {
    localStorage.setItem(this.KEY_TOKEN, token);
  }

  public getToken(): string {
    return localStorage.getItem(this.KEY_TOKEN) ?? '';
  }

  public hasToken(): boolean {
    return !!this.getToken();
  }

  public remove(): void {
    localStorage.removeItem(this.KEY_TOKEN);
  }

}
