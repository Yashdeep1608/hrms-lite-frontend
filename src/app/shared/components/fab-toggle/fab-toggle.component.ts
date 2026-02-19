import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { TranslationService } from '../../../core/services/translation.service';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { ThemeService } from '../../../../theme/theme.service';

@Component({
  selector: 'app-fab-toggle',
  standalone: true,
  imports: [CommonModule,TranslateModule,FormsModule],
  templateUrl: './fab-toggle.component.html',
})
export class FabToggleComponent {
  menuOpen = false;
  isDarkMode = false;
  selectedLang: string = 'en';
  supportedLangs = ['en', 'hi', 'hi-en'];
  @ViewChild('popoverMenu') popoverMenuRef!: ElementRef;

  constructor(private translationService: TranslationService,private themeService: ThemeService) {
    this.selectedLang = translationService.getCurrentLang();
    this.isDarkMode = document.documentElement.classList.contains('dark');
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    const isDark = document.documentElement.classList.contains('dark');
    this.themeService.toggleDarkMode(!isDark);
  }

  changeLang() {
    this.translationService.setLanguage(this.selectedLang);
  }
  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const clickedInside = this.popoverMenuRef.nativeElement.contains(event.target);
    if (!clickedInside && this.menuOpen) {
      this.menuOpen = false;
    }
  }
}
