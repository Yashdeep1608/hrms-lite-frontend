import { Pipe, PipeTransform } from '@angular/core';
import { format } from 'date-fns';

@Pipe({
  name: 'formatDateTime',
  standalone: true
})
export class FormatDateTimePipe implements PipeTransform {
  transform(value: string | Date | number, formatStr: string = 'PPpp'): string {
    if (!value) return '';
    return format(new Date(value), formatStr);
  }
}
// <!-- Convert backend datetime to local -->
// <p>{{ user.createdAt | localDateTime }}</p>

// <!-- Format to UTC -->
// <p>{{ user.createdAt | utcDateTime:'dd-MM-yyyy HH:mm' }}</p>

// <!-- Format to specific timezone -->
// <p>{{ order.shippedAt | timeZoneDateTime:'Asia/Kolkata' }}</p>

// <!-- Fully custom format -->
// <p>{{ event.startTime | formatDateTime:'EEEE, MMM d yyyy h:mm a' }}</p>