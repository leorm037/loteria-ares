import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { TokenService } from './../service/token.service';
import { Router } from '@angular/router';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const tokenService: TokenService = inject(TokenService);
  const router: Router = inject(Router);

  if (tokenService.has()) {
    const token = tokenService.get();

    req = req.clone({
      setHeaders: {
        'Authorization': `Bearer ${token}`,
      },
    });
  } else {
    router.navigateByUrl('/entrar');
  }

  return next(req);
};
