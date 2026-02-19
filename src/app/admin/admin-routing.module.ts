// src/app/public/public-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from '../layouts/auth-layout/auth-layout.component';
import { AuthGuard } from '../core/guards/auth.guard';
import { AdminLayoutComponent } from '../layouts/admin-layout/admin-layout.component';
import { PermissionGuard } from '../core/guards/permission.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), AuthLayoutComponent],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
