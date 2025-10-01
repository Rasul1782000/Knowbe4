// src/app/components/calendar/calendar.component.ts
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.html',
  styleUrls: ['./calendar.scss'],
  standalone: false
})
export class CalendarComponent {
  selected = signal<Date | null>(null);
  currentDate = signal(new Date());
}
