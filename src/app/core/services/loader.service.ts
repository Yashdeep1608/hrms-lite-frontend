import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoaderService {
  private globalLoading = new BehaviorSubject<boolean>(false);
  private partialLoaders = new BehaviorSubject<Record<string, boolean>>({});

  global$ = this.globalLoading.asObservable();
  partial$ = this.partialLoaders.asObservable();

  show(id?: string) {
    if (!id) {
      this.globalLoading.next(true);
    } else {
      const current = this.partialLoaders.value;
      this.partialLoaders.next({ ...current, [id]: true });
    }
  }

  hide(id?: string) {
    if (!id) {
      this.globalLoading.next(false);
    } else {
      const current = this.partialLoaders.value;
      this.partialLoaders.next({ ...current, [id]: false });
    }
  }

  isLoading(id: string): boolean {
    return !!this.partialLoaders.value[id];
  }
}
