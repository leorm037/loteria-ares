import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private loadingSubject = new BehaviorSubject<boolean>(false);

  public asObservable(): Observable<boolean> {
    return this.loadingSubject.asObservable();
  }

  public show(){
    this.loadingSubject.next(true);
  }

  public hide(){
    this.loadingSubject.next(false);
  }
  
  public isLoading(){
    return this.loadingSubject.getValue();
  }
}
