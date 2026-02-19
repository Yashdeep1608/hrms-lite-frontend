import { Injectable, OnInit } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, Observable, tap, throwError } from 'rxjs';
import { RestApiService } from './rest.service';
import { LoaderService } from './loader.service';
import { AdminService } from './admin.service';
@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnInit {
  userRoles: any = [
    'superadmin',
    'admin',
    'employee'
  ];
  currentUserRole = '';
  userPermissions: any[] = [];
  userPlan: string = '';
  userBusinessType: string = '';
  private userId: number = 0;
  userSubject$: any = new BehaviorSubject<any>(null);
  setUserId(id: number) {
    this.userId = id;
  }

  getUserId(): number | 0 {
    return this.userId;
  }

  clear() {
    this.userId = 0;
  }
  constructor(
    private restApiService: RestApiService,
    private router: Router
  ) {
    const storedRole = localStorage.getItem('currentUserRole');
    if (storedRole) {
      this.currentUserRole = storedRole;
    }
  }
  ngOnInit(): void {}
  encryptPassword(password: string): string {
    const secret = 'X9$@!rA7'; // Shared secret
    let encrypted = '';

    for (let i = 0; i < password.length; i++) {
      const pwdChar = password.charCodeAt(i);
      const secretChar = secret.charCodeAt(i % secret.length);
      const mixed = pwdChar + secretChar + i;
      encrypted += String.fromCharCode(mixed);
    }

    return btoa(encrypted); // Convert to base64
  }
  login(request: any): Observable<any> {
    const encryptedPassword = this.encryptPassword(request.password);
    const body = new HttpParams()
      .set('grant_type', 'password')
      .set('phone_number', request.phone_number)
      .set('password', encryptedPassword)
      .set('scope', '')
      .set('client_id', '')
      .set('client_secret', '');
    return this.restApiService.post('/auth/login', body.toString(), true);
  }

  logout(): void {
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigate(['/logout']);
  }
}
