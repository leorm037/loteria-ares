import { Injectable } from '@angular/core';

const KEY = 'access_token';

@Injectable({
  providedIn: 'root'
})
export class TokenService {


  public save(token: string): void {
    localStorage.setItem(KEY, token);
  }

  public remove(): void {
    localStorage.removeItem(KEY);
  }

  public get(): string {
    return localStorage.getItem(KEY) ?? "";
  }

  public has(): boolean {
    return !!this.get();
  }

}
