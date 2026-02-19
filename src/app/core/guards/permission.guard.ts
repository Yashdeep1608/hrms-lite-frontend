// permission.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PermissionGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const requiredPage = route.data['page'] as string;

    const userPermissions = JSON.parse(localStorage.getItem("userPermissions") || "[]") || []; // array of strings

    // ✅ check page access
    if (!userPermissions.includes(requiredPage)) {
      this.router.navigate(['/dashboard']); // or dashboard
      return false;
    }
    return true;
  }
}
