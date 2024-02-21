import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { ToastService } from './../service/toast.service';
import { inject } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const toastService: ToastService = inject(ToastService);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let errorMessage = 'Ocorreu um erro desconhecido.';

      if (error.error instanceof ErrorEvent) {
        errorMessage = `Erro do cliente: ${error.error.message}`;
      } else if (error.status === 404) {
        errorMessage = 'Recurso não enconstrado.';
      } else if (error.status === 500) {
        errorMessage = 'Sistema indisponível.';
      } else if (error.status === 401) {
        errorMessage = 'Acesso não autorizado.';
      }

      toastService.showDangerToast(errorMessage);

      console.error(error.status, error.message, errorMessage);

      return throwError(() => new Error('Ops, ocorreu um erro'));
    })
  );
};
