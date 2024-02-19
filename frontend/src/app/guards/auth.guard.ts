import { CanActivateFn, Router } from '@angular/router';
import { UsuarioService } from './../service/usuario.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const usuarioService: UsuarioService = inject(UsuarioService);
  const router: Router = inject(Router);

  if (usuarioService.hasAuth()) {
    return true;
  }

  router.navigateByUrl('/entrar');
  return false;
};
