import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction'; // a plugin


@Component({
  selector: 'app-Calendar',
  standalone: false,
  templateUrl: './Calendar.html',
  styleUrls: ['./Calendar.scss']
})
export class Calendar {
  title = 'button-app';
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    dateClick: (arg) => this.handleDateClick(arg),
    events: [
      { title: 'event 1', date: '2019-04-01' },
      { title: 'event 2', date: '2019-04-02' }
    ]
  };

  handleDateClick(arg: DateClickArg) {
    alert('date click! ' + arg.dateStr)
  }
}
