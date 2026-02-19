import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../../core/services/admin.service';

@Component({
  selector: 'app-attendance',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './attendance.component.html',
  styleUrl: './attendance.component.scss'
})
export class AttendanceComponent implements OnInit {

  employeeId!: number;
  attendanceList: any[] = [];
  loading = true;
  attendanceForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private adminService: AdminService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.employeeId = Number(this.route.snapshot.paramMap.get('id'));
    this.initForm();
    this.loadAttendance();
  }

  initForm() {
    this.attendanceForm = this.fb.group({
      date: ['', Validators.required],
      status: ['PRESENT', Validators.required]
    });
  }

  loadAttendance() {
    this.loading = true;

    this.adminService.getAttendanceByEmployee(this.employeeId).subscribe({
      next: (res:any) => {
        this.attendanceList = res.data || [];
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }

  markAttendance() {
    if (this.attendanceForm.invalid) return;

    const payload = {
      employee_id: this.employeeId,
      ...this.attendanceForm.value
    };

    this.adminService.markAttendance(payload).subscribe({
      next: () => {
        this.attendanceForm.reset({ status: 'PRESENT' });
        this.loadAttendance();
      }
    });
  }
}
