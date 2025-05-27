import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { LOGGER_FN } from '../tokens';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  
  const service = inject(AuthService);

  if (service.isLoggedIn()) {
    const token = service.getToken();

    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }
  
  return next(req);
};
