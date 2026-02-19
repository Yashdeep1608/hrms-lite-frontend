import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private supportedLangs = ['en', 'hi'];
  private defaultLang = 'en';
  private langChangeSubject = new BehaviorSubject<string>(this.defaultLang);
  langChange$ = this.langChangeSubject.asObservable();

  constructor(private translate: TranslateService) {}

  init(): void {
    this.translate.addLangs(this.supportedLangs);
    this.translate.setDefaultLang(this.defaultLang);

    const savedLang = localStorage.getItem('lang');
    const browserLang = this.translate.getBrowserLang();

    const langToUse =
      savedLang && this.supportedLangs.includes(savedLang)
        ? savedLang
        : (browserLang && this.supportedLangs.includes(browserLang)
            ? browserLang
            : this.defaultLang);

    this.setLanguage(langToUse, false); // false = don't save again
  }

  setLanguage(lang: string, persist: boolean = true): void {
    if (!this.supportedLangs.includes(lang)) return;
    if (this.translate.currentLang === lang) return; // 🚨 prevent recursion

    this.translate.use(lang);
    document.body.classList.remove('lang-en', 'lang-hi');
    document.body.classList.add(`lang-${lang}`);

    if (persist) {
      localStorage.setItem('lang', lang);
    }

    this.langChangeSubject.next(lang); // 🔔 notify subscribers
  }

  getCurrentLang(): string {
    return this.translate.currentLang || this.defaultLang;
  }

  getSupportedLanguages(): string[] {
    return this.supportedLangs;
  }
}
