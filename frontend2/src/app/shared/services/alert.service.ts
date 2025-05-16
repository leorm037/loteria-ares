import { inject, Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, filter, Observable } from 'rxjs';
import { Alert } from '../interfaces/alert';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private alertSubject = new BehaviorSubject<Alert[] | null>(null);

  private router!: Router;

  public constructor() {
    this.router = inject(Router);
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => this.clear());
  }

  public clear(): void {
    this.alertSubject.next(null);
  }

  public getAlert(): Observable<Alert[] | null> {
    return this.alertSubject;
  }

  public send(alerts: Alert[] | null) {
    this.alertSubject.next(alerts);
  }

}
