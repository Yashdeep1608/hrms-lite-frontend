import { Pipe, PipeTransform } from '@angular/core';
import { format } from 'date-fns';

@Pipe({
  name: 'localDateTime',
  standalone: true
})
export class LocalDateTimePipe implements PipeTransform {
  transform(value: string | Date | number, formatStr = 'dd MMM yyyy, hh:mm a'): string {
    if (!value) return '';
    const date = new Date(value);
    return format(date, formatStr);
  }
}
