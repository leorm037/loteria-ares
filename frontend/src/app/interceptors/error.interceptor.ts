import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { MensagemService } from './../service/mensagem.service';
import { inject } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const msg: MensagemService = inject(MensagemService);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let errorMessage = 'Ops, ocorreu um erro desconhecido.';

      if (error.error instanceof ErrorEvent) {
        errorMessage = `Erro do cliente: ${error.error.message}`;
      } else if (error.status === 404) {
        errorMessage = 'Recurso não encontrado.';
      } else if (error.status === 500) {
        errorMessage = 'Sistema indisponível.';
      } else if (error.status === 401) {
        errorMessage = 'E-mail ou senha inválido.';
      } else if (error.status === 0) {
        errorMessage = 'O servidor não está respondendo. <br> Tente novamente mais tarde.';
      }

      console.error("Interceptor error", error.message);

      msg.error(errorMessage);

      return throwError(() => new Error(errorMessage));
    })
  );
};
