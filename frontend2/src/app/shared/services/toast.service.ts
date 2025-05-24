import { Injectable } from '@angular/core';
import { ToastMessage } from '../interfaces/toast-message';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  private toasts: ToastMessage[] = [];

  public show(header: string, body: string, delay: number = 5000, autohide: boolean = true): void {
    this.toasts.push({
      header,
      body,
      delay,
      autohide
    });
  }

  public remove(toast: ToastMessage): void {
    this.toasts = this.toasts.filter(t => t !== toast);
  }

  public getToasts(): ToastMessage[] {
    return this.toasts;
  }


}
