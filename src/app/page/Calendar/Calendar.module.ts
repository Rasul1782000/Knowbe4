import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarPage } from './Calendar';
import { ComponentsModule } from '../../components/components-module';
import { FullCalendarModule } from '@fullcalendar/angular';


@NgModule({
  declarations: [CalendarPage],
  imports: [CommonModule, ComponentsModule, FullCalendarModule],
})
export class CalendarModule { }
