import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderService } from '../../../core/services/loader.service';

@Component({
  selector: 'global-loader',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-container *ngIf="loaderService.global$ | async as isLoading">
      <div
        *ngIf="isLoading"
        class="fixed inset-0 z-[20000] flex items-center justify-center bg-white/70 dark:bg-gray-900/70"
      >
        <div
          class="w-10 h-10 border-4 border-primary-500 border-t-transparent rounded-full animate-spin"
        ></div>
      </div>
    </ng-container>
  `,
})
export class GlobalLoaderComponent implements AfterViewInit {
  constructor(
    public loaderService: LoaderService,
    private cdr: ChangeDetectorRef
  ) {}
  ngAfterViewInit() {
    this.cdr.detectChanges(); // Forces Angular to re-check after async changes
  }
}
