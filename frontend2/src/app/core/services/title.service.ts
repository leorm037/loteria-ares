import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TitleService extends TitleStrategy{
  
  private readonly siteName = "Loteria";
  
  constructor(
    private title: Title
  ) { 
    super();
  }

  override updateTitle(snapshot: RouterStateSnapshot): void {
    const pageTitle = this.buildTitle(snapshot);

    if (pageTitle) {
      this.title.setTitle(`${this.siteName} :: ${pageTitle}`);
    } else {
      this.title.setTitle(this.siteName);
    }
  }
}
