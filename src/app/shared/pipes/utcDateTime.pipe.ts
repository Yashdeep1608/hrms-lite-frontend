import { Pipe, PipeTransform } from '@angular/core';
import { format } from 'date-fns';

@Pipe({
  name: 'utcDateTime',
  standalone: true
})
export class UtcDateTimePipe implements PipeTransform {
  transform(
    value: string | Date | number,
    formatStr: string = 'yyyy-MM-dd HH:mm:ss'
  ): string {
    if (!value) return '';
    return format(new Date(value), formatStr);
  }
}
