import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../../core/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { getErrorMessage } from '../../core/utils/translation-loader';
import { SharedModule } from '../../shared/shared.module';
import { LoaderService } from '../../core/services/loader.service';
import { PartialLoaderComponent } from '../../shared/components/partial-loader/partial-loader.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModule, PartialLoaderComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm!: FormGroup;
  showPassword: boolean = false;
  userId: number = 0;
  businessId: number = 0;
  constructor(
    private router: Router,
    private loaderService: LoaderService,
    private fb: FormBuilder,
    private authService: AuthService,
    private toastr: ToastrService,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    const nav = this.router.getCurrentNavigation();
    const state = nav?.extras?.state || {};
    const reason = state['reason'];

    if (reason === 'paymentSuccessful') {
      this.toastr.info(this.translate.instant('pleaseLogin'));
    }
    this.loginForm = this.fb.group({
      phone_number: [
        '',
        [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/
          ),
        ],
      ],
    });
  }

  onLogin() {
    this.loaderService.show('login-loader');
    if (!this.loginForm.valid) {
      this.toastr.error(
        this.translate.instant('validationError'),
        this.translate.instant('error')
      );
      return;
    }
    const loginData = this.loginForm.value;
    this.authService.login(loginData).subscribe({
      next: (res: any) => {
        this.loaderService.hide('login-loader');
        const token = res.data?.access_token;
          if (token) {
            localStorage.setItem('access_token', token);
            localStorage.removeItem('sign_up_access_token');
          }
          this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        this.loaderService.hide('login-loader');
        localStorage.clear();
        sessionStorage.clear();
        this.toastr.error(error.error.message, this.translate.instant('error'));
      },
    });
  }
  getFieldError(controlName: string): string | null {
    const control = this.loginForm.get(controlName);
    return control && control.touched && control.invalid
      ? getErrorMessage(control, this.translate)
      : null;
  }
  allowOnlyDigits(event: KeyboardEvent) {
    const allowedKeys = [
      'Backspace',
      'Tab',
      'ArrowLeft',
      'ArrowRight',
      'Delete',
    ];

    // If key is one of the allowed control keys, allow it
    if (allowedKeys.indexOf(event.key) !== -1) {
      return;
    }

    // Allow only digits 0-9
    const regex = /[0-9]/;
    if (!regex.test(event.key)) {
      event.preventDefault();
    }
  }
}
