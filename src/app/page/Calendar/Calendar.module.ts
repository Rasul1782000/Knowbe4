import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Calendar } from './Calendar';
import { ComponentsModule } from '../../components/components-module';
import { FullCalendarModule } from '@fullcalendar/angular';


@NgModule({
  declarations: [Calendar],
  imports: [CommonModule, ComponentsModule, FullCalendarModule],
})
export class CalendarModule { }
