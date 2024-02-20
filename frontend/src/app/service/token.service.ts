import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Usuario } from '../interface/usuario.interface';

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

    return !!this.get() && this.isValid();
  }

  public isValid(): boolean {
    const usuario = jwtDecode(this.get()) as Usuario;
    const exp = usuario.exp || 0;
    const current = Math.floor((new Date()).getTime()/1000);

    if (current >= exp) {
      this.remove();
      return false;
    }

    return true;
  }

}
