import { Inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = () => {
  const authService = Inject(AuthService);
  const router = Inject(Router);

  if(authService.isLoggedIn) {
    return true;
  }
  return router.parseUrl('/');
};
