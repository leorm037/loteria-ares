import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageTitleService {

  private siteTitle = 'Loteria';

  constructor(
    private router: Router,
    private title: Title
  ) { 
    this.setPageTitle();
  }

  private setPageTitle() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        let child = this.router.routerState.root;

        while (child.firstChild) {
          child = child.firstChild;
        }

        return child.snapshot.data['title'] || '';
      })
    ).subscribe(title => {
      this.title.setTitle((title ? `${this.siteTitle} :: ${title}` : this.siteTitle));
    });
  }
}
