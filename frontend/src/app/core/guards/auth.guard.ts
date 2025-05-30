import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot, 
  state: RouterStateSnapshot
) => {
  
  const service = inject(AuthService);
  const router = inject(Router);

  if (!service.isLoggedIn()) {
    router.navigateByUrl('/login');

    return false;
  }
  
  return true;
};
