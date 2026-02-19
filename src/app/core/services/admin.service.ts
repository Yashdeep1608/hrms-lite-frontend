import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable} from 'rxjs';
import { RestApiService } from './rest.service';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  public countries$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public states$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  constructor(private restApiService: RestApiService) {
  }
  getEmployees() {
    return this.restApiService.get('/hrms/employees');
  }

  getAttendanceByEmployee(employeeId: number) {
    return this.restApiService.get(`/hrms/attendance/${employeeId}`);
  }
  createEmployee(payload: any) {
    return this.restApiService.post(`/hrms/employees`, payload);
  }

  deleteEmployee(id: number) {
    return this.restApiService.delete(`/hrms/employees/${id}`);
  }
  markAttendance(payload: any) {
    return this.restApiService.post(`/hrms/attendance`, payload);
  }
}
