// src/app/public/public-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from '../layouts/auth-layout/auth-layout.component';

const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        loadComponent: () =>
          import('./login/login.component').then((m) => m.LoginComponent),
        data: { animation: 'LoginPage' },
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), AuthLayoutComponent],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
