import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { AutenticacaoService } from '../services/autenticacao.service';

export const autenticacaoGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot, 
  state: RouterStateSnapshot
) => {
  const autenticacaoService = inject(AutenticacaoService);
  const router = inject(Router);

  if (autenticacaoService.hasUsuario()) {
    return true;
  }

  router.navigate(['/entrar']);
  
  return false;
};
