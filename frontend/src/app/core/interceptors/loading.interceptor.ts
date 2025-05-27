import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoadingService } from '@app/shared';
import { finalize } from 'rxjs';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const service = inject(LoadingService);

  service.show();
  
  return next(req).pipe(
    finalize(() => {
      service.hide();
    })
  );
};
