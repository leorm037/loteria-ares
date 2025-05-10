import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { TokenService } from '../services/token.service';

export const autenticacaoInterceptor: HttpInterceptorFn = (req, next) => {
  
  const service = inject(TokenService);
  
  if (service.hasToken()) {
    const token = service.getToken();
    
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }
  
  return next(req);
};
