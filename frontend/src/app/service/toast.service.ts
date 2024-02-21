import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ToastEvent } from './../interface/toast-event.interface';
import { EventTypes } from '../enum/event-types';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  private toastEvents = new Subject<ToastEvent>();

  public toastEvents$: Observable<ToastEvent>;

  public constructor() {
    this.toastEvents$ = this.toastEvents.asObservable();
  }

  public showPrimaryToast(mensagem: string, titulo: string | undefined = undefined) {
    this.toastEvents.next({
      mensagem,
      titulo,
      type: EventTypes.PRIMARY,
    });
  }

  public showSecondaryToast(mensagem: string, titulo: string | undefined = undefined) {
    this.toastEvents.next({
      mensagem,
      titulo,
      type: EventTypes.SECONDARY,
    });
  }

  public showSuccessToast(mensagem: string, titulo: string | undefined = undefined) {
    this.toastEvents.next({
      mensagem,
      titulo,
      type: EventTypes.SUCCESS,
    });
  }

  public showWarningToast(mensagem: string, titulo: string | undefined = undefined) {
    this.toastEvents.next({
      mensagem,
      titulo,
      type: EventTypes.WARNING,
    });
  }

  public showDangerToast(mensagem: string, titulo: string | undefined = undefined) {
    this.toastEvents.next({
      mensagem,
      titulo,
      type: EventTypes.DANGER,
    });
  }

  public showInfoToast(mensagem: string, titulo: string | undefined = undefined) {
    this.toastEvents.next({
      mensagem,
      titulo,
      type: EventTypes.INFO,
    });
  }

  public showLightToast(mensagem: string, titulo: string | undefined = undefined) {
    this.toastEvents.next({
      mensagem,
      titulo,
      type: EventTypes.LIGHT,
    });
  }

  public showDarkToast(mensagem: string, titulo: string | undefined = undefined) {
    this.toastEvents.next({
      mensagem,
      titulo,
      type: EventTypes.DARK,
    });
  }
}
