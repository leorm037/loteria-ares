import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class MensagemService {

  private msg = Swal.mixin({
    confirmButtonText: 'Fechar',
    customClass: {
      confirmButton: 'btn btn-sm border shadow bg-primary text-white',
      closeButton: 'btn btn-sm border shadow bg-secondary text-white',
      denyButton: 'btn btn-sm bg-warning text-white',
      cancelButton: 'btn btn-sm bg-secondary text-white'
    },
  });

  constructor() { }

  public success(mensagem: string): void {
    this.msg.fire({
      icon: 'success',
      text: mensagem
    });
  }

  public info(mensagem: string): void {
    this.msg.fire({
      icon: 'info',
      text: mensagem
    });
  }

  public question(mensagem: string): void {
    this.msg.fire({
      icon: 'question',
      text: mensagem
    });
  }

  public warning(mensagem: string): void {
    this.msg.fire({
      icon: 'warning',
      text: mensagem
    });
  }

  public error(mensagem: string): void {
    this.msg.fire({
      icon: 'error',
      html: mensagem
    });
  }

}
