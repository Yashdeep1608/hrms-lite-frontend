import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../core/services/admin.service';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.scss'
})
export class EmployeesComponent implements OnInit {

  employees: any[] = [];
  loading = true;
  showModal = false;
  employeeForm!: FormGroup;

  constructor(
    private adminService: AdminService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.loadEmployees();
  }

  initForm() {
    this.employeeForm = this.fb.group({
      full_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      department: ['', Validators.required]
    });
  }

  loadEmployees() {
    this.loading = true;
    this.adminService.getEmployees().subscribe({
      next: (res:any) => {
        this.employees = res.data || [];
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.employeeForm.reset();
  }

  createEmployee() {
    if (this.employeeForm.invalid) return;

    this.adminService.createEmployee(this.employeeForm.value).subscribe({
      next: () => {
        this.closeModal();
        this.loadEmployees();
      }
    });
  }

  deleteEmployee(id: number) {
    if (!confirm('Are you sure you want to delete this employee?')) return;

    this.adminService.deleteEmployee(id).subscribe({
      next: () => this.loadEmployees()
    });
  }
}
