import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CalendarEvent, CalendarMonthViewBeforeRenderEvent, CalendarView } from 'angular-calendar';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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
      day.cssClass = this.getCellBackgroundClass(date);
    });
  }

  private getCellBackgroundClass(date: Date): string {
    let dayOfMonth = date.getDate();
    let monthOfYear = date.getMonth();
    let year = date.getFullYear();
    var event = this.events.find(event => {
      const startDate = event.start;
      const endDate = event.end;
      return startDate.getDate() <= dayOfMonth && startDate.getMonth() === monthOfYear && endDate.getDate() >= dayOfMonth && endDate.getMonth() === monthOfYear && startDate.getFullYear() === year && endDate.getFullYear() === year;
    });
    if (event) {
      return event.meta.cssClass;
    }
    return '';
  }

}
