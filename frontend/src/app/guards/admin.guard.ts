import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AutenticacaoService } from '../services/autenticacao.service';

export const adminGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot, 
  state: RouterStateSnapshot
) => {
  const autenticacaoService = inject(AutenticacaoService);
  const router = inject(Router);

  if (autenticacaoService.hasRole('ROLE_ADMIN')) {
    return true;
  }

  router.navigate(['/']);

  return false;
};
