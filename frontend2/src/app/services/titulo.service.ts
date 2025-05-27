import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TituloService extends TitleStrategy {

  private readonly siteNome = 'Loteria';

  constructor(
    private titulo: Title
  ) {
    super();
  }

  override updateTitle(snapshot: RouterStateSnapshot): void {
    const paginaTitulo = this.buildTitle(snapshot);

    if (paginaTitulo) {
      this.titulo.setTitle(`${this.siteNome} :: ${paginaTitulo}`);
    } else {
      this.titulo.setTitle(this.siteNome);
    }
  }

}
