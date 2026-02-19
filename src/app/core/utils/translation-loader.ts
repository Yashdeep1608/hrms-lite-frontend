// src/app/core/utils/translation-loader.ts
import { HttpClient } from '@angular/common/http';
import { AbstractControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// AoT requires an exported factory function
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/langs/', '.json');
}
export function getErrorMessage(
  control: AbstractControl,
  translate: TranslateService
): string | null {
  if (!control || !control.errors) return null;

  const errors = control.errors;

  if (errors['required']) {
    return translate.instant('required');
  }

  if (errors['email']) {
    return translate.instant('invalidEmail');
  }

  if (errors['minlength']) {
    return translate.instant('minlength', {
      requiredLength: errors['minlength'].requiredLength,
    });
  }

  if (errors['maxlength']) {
    return translate.instant('maxlength', {
      requiredLength: errors['maxlength'].requiredLength,
    });
  }
  if (errors['pattern']) {
    return translate.instant('passwordPattern'); // Add this key in your i18n files
  }
  // Add more mappings as needed...

  return null;
}