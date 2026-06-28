import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarPage } from './Calendar';
import { FullCalendarModule } from '@fullcalendar/angular';

@NgModule({
  declarations: [CalendarPage],
  imports: [CommonModule, FullCalendarModule],
})
export class CalendarModule {}
