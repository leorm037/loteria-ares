import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Breadcrumb } from '../interfaces/breadcrumb';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {

  private breadcrumbsSubject = new BehaviorSubject<Breadcrumb[] | null>(null);

  private breadcrumbsObject = this.breadcrumbsSubject.asObservable();

  constructor() { }

  public getBreadcrumbs(): Observable<Breadcrumb[] | null> {
    return this.breadcrumbsObject;
  }

  public clear(): void {
    this.breadcrumbsSubject.next(null);
  }

  public sendBreadcrumb(breadcrumbs: Breadcrumb[] | null) {
    this.clear();
    this.breadcrumbsSubject.next(breadcrumbs);
  }
}
