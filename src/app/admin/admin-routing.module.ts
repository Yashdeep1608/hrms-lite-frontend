// src/app/public/public-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from '../layouts/auth-layout/auth-layout.component';
import { AdminLayoutComponent } from '../layouts/admin-layout/admin-layout.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
       {
        path: 'dashboard',
        loadComponent: () =>
          import('./dashboard/dashboard.component').then((m) => m.DashboardComponent),
        data: { animation: 'Admin' },
      },
       {
        path: 'employees',
        loadComponent: () =>
          import('./employees/employees.component').then((m) => m.EmployeesComponent),
        data: { animation: 'Admin' },
      },
       {
        path: 'attendance/:id',
        loadComponent: () =>
          import('./attendance/attendance.component').then((m) => m.AttendanceComponent),
        data: { animation: 'Admin' },
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), AuthLayoutComponent],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
