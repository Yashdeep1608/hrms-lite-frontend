import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { map } from 'rxjs/operators';
import { LoaderService } from '../../../core/services/loader.service';

@Component({
  selector: 'partial-loader',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
    *ngIf="visible$ | async"
    class="absolute inset-0 z-20 flex justify-center items-center bg-gray-200/60 dark:bg-gray-900/60 rounded-2xl"
    >
    <div class="w-6 h-6 border-2 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  `,
})
export class PartialLoaderComponent implements OnInit {
  @Input() id!: string;
  visible$:any;

  constructor(private loaderService: LoaderService) {}

  ngOnInit(): void {
    this.visible$ = this.loaderService.partial$.pipe(
        map(loaders => !!loaders[this.id])
    );
    if (!this.id) {
      throw new Error('partial-loader requires an [id] input.');
    }
  }
}
