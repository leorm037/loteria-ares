import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { TokenService } from './../service/token.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const tokenService: TokenService = inject(TokenService);

  if (tokenService.has()) {
    const token = tokenService.get();

    req = req.clone({
      setHeaders: {
        'Authorization': `Bearer ${token}`,
      },
    });
  }

  return next(req);
};
