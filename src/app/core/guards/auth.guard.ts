import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('access_token');

    if (!token) {
      this.router.navigate(['/login']);
      return false;
    }

    const isTokenValid = this.isTokenValid(token);

    if (!isTokenValid) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }

  private isTokenValid(token: string): boolean {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const exp = payload.exp;

      // Token expiry is in seconds
      return exp && Date.now() < exp * 1000;
    } catch (error) {
      return false;
    }
  }
}
