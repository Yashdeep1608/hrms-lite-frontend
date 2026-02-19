// src/app/core/interceptors/auth.interceptor.ts
import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { jwtDecode } from 'jwt-decode';
import { catchError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  const toastr = inject(ToastrService);

  const token = localStorage.getItem('access_token');

  if (token) {
    if (isTokenExpired(token)) {
      handleLogout(router, toastr);
      throw new Error('Session expired. Please log in again.');
    }

    req = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` },
    });
  }

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      const errorCode = error?.error?.code ?? error?.status ?? 0;

      if (errorCode === 401 || errorCode === 403) {
        handleLogout(router, toastr);
      }

      throw error;
    })
  );
};

function isTokenExpired(token: string): boolean {
  try {
    const decoded: any = jwtDecode(token);
    if (!decoded.exp) return true;

    const expiry = decoded.exp * 1000;
    return Date.now() > expiry;
  } catch {
    return true;
  }
}

function handleLogout(router: Router, toastr: ToastrService) {
  localStorage.removeItem('access_token');
  localStorage.clear();
  sessionStorage.clear();
  toastr.error('Session expired, please log in again.');
  router.navigate(['/login']);
}
