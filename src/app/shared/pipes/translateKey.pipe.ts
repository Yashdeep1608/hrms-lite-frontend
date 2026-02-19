import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'translateKey',
  standalone: true
})
export class TranslateKeyPipe implements PipeTransform {
  constructor(private translate: TranslateService) {}

  transform(suffix: string, prefix = ''): string {
    const key = prefix ? `${prefix}${suffix}` : suffix;
    return this.translate.instant(key);
  }
}
