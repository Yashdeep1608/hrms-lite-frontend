import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslationService } from './core/services/translation.service';
import { ThemeService } from '../theme/theme.service';
import { GlobalLoaderComponent } from './shared/components/global-loader/global-loader.component';
import { FabToggleComponent } from './shared/components/fab-toggle/fab-toggle.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,GlobalLoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(
    private translationService: TranslationService,
    private themeService: ThemeService
  ) {
    this.translationService.init();

    // ⚠️ Remove the recursion – no need to re-call setLanguage here
    this.translationService.langChange$.subscribe(lang => {
      console.log('Language changed to:', lang);
    });

    this.themeService.init();
  }
}
