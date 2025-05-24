import { CanActivateChildFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { LOGGER_FN } from '../tokens';

export const adminGuard: CanActivateChildFn = (childRoute, state) => {
  
  const service = inject(AuthService);
  const router = inject(Router);

  if (!service.hasRole('ROLE_ADMIN')) {
    router.navigateByUrl('/');
    
    return false;
  }

  return true;
};
