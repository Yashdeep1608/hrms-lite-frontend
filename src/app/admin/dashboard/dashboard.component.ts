import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { AdminService } from '../../core/services/admin.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  totalEmployees = 0;
  totalAttendance = 0;
  presentToday = 0;
  absentToday = 0;

  loading = true;

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.loadDashboardData();
  }

  loadDashboardData() {
    this.adminService.getEmployees().subscribe({
      next: (res:any) => {
        const employees = res.data || [];
        this.totalEmployees = employees.length;

        const today = new Date().toISOString().split('T')[0];

        let totalAttendance = 0;
        let present = 0;
        let absent = 0;

        employees.forEach((emp: any) => {
          this.adminService.getAttendanceByEmployee(emp.id).subscribe((attRes:any) => {
            const attendance = attRes.data || [];

            totalAttendance += attendance.length;

            attendance.forEach((a: any) => {
              if (a.date === today) {
                if (a.status === 'PRESENT') present++;
                if (a.status === 'ABSENT') absent++;
              }
            });

            this.totalAttendance = totalAttendance;
            this.presentToday = present;
            this.absentToday = absent;
            this.loading = false;
          });
        });

        if (employees.length === 0) {
          this.loading = false;
        }

      },
      error: () => {
        this.loading = false;
      }
    });
  }
}

