// src/app/app-routing.module.ts
import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { ReverseAuthGuard } from './core/guards/reverse-auth.guard';

export const APP_ROUTES: Routes = [
  {
    path: '',
    canActivate: [ReverseAuthGuard],
    loadChildren: () =>
      import('./auth/auth-routing.module').then((m) => m.AuthRoutingModule),
  },
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./admin/admin-routing.module').then((m) => m.AdminRoutingModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./auth/auth-routing.module').then((m) => m.AuthRoutingModule),
  },
  {
    path: '**',
    redirectTo: 'login', // fallback always last
    pathMatch: 'full',
  },
];

