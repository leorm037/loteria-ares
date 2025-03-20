import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: '[app-root]',
  imports: [RouterModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private baseTitulo = 'Loteria';

  public constructor(private router: Router, private titleService: Title) {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
          let route = this.router.routerState.root;
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route.snapshot.data['title'] ? `${this.baseTitulo} :: ${route.snapshot.data['title']}` : this.baseTitulo;
        })
      )
      .subscribe(title => this.titleService.setTitle(title));
  }
}
