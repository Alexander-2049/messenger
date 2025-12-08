import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const profileGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const username = localStorage.getItem('username');

  if (!username) {
    router.navigate(['/profile']);
    return false;
  }

  return true;
};
