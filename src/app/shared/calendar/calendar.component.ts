import { Component, Input, OnInit } from '@angular/core';
import { CalendarEvent, CalendarMonthViewBeforeRenderEvent, CalendarView } from 'angular-calendar';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  view: CalendarView = CalendarView.Month;

  viewDate: Date = new Date();

  @Input() events: CalendarEvent[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  beforeMonthViewRender(renderEvent: CalendarMonthViewBeforeRenderEvent): void {
    renderEvent.body.forEach((day) => {
      const date = day.date;
      day.backgroundColor = this.getCellBackgroundClass(date);
    });
  }

  private getCellBackgroundClass(date: Date): string {
    let dayOfMonth = date.getDate();
    let monthOfYear = date.getMonth();
    var event = this.events.find(event => event.start.getDate() <= dayOfMonth && event.start.getMonth() === monthOfYear && event.end.getDate() >= dayOfMonth);
    if (event) {
      return event.color.secondary;
    }
    return '';
  }

}
