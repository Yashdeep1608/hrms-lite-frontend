import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private renderer: Renderer2;
  private isDarkMode = false;
  private currentGradient: 'light' | 'dark' = 'light';

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  init(): void {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: light)').matches;

    const enableDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    this.toggleDarkMode(enableDark);
  }

  toggleDarkMode(enable: boolean): void {
    this.isDarkMode = false;
    const html = document.documentElement;

    if (enable) {
      this.renderer.addClass(html, 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      this.renderer.removeClass(html, 'dark');
      localStorage.setItem('theme', 'light');
    }
  }
  getCurrentTheme() {
    return {
      mode: this.isDarkMode ? 'dark' : 'light',
      gradient: this.currentGradient
    };
  }
}
