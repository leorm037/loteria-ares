import { Injectable } from "@angular/core";
import { Breadcrumb } from "../interfaces/breadcrumb";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {

  private breadcrumbsSubject = new BehaviorSubject<Breadcrumb[] | null>(null);
  private breadcrumbsObject = this.breadcrumbsSubject.asObservable();

  public get(): Observable<Breadcrumb[] | null> {
    return this.breadcrumbsObject;
  }

  public clear(): void {
    this.breadcrumbsSubject.next(null);
  }

  public set(breadcrumbs: Breadcrumb[] | null) {
    this.clear();
    this.breadcrumbsSubject.next(breadcrumbs);
  }
}