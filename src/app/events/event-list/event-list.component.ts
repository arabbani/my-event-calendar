import { Component, OnInit } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { colors } from '../../shared/colors';
import { EventService } from '../event.service';
import { IEvent } from '../event.model';



@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  events: CalendarEvent[] = [];

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.events$.subscribe(events => {
      this.createCalendarEvents(events);
    });
    this.eventService.getEvents();
  }

  private createCalendarEvents(events: IEvent[]): void {
    const numberOfColors = colors.length;
    let currentColorIndex = 0;
    events.forEach((event, index) => {
      if (currentColorIndex >= numberOfColors) {
        currentColorIndex = 0;
      }
      this.events.push({
        id: index,
        title: event.name,
        start: event.start as Date,
        end: event.end as Date,
        color: {
          primary: colors[currentColorIndex].color,
          secondary: colors[currentColorIndex].backgroundColor
        },
        meta: {
          id: event.name,
        },
      });
      currentColorIndex++;
    });
  }

}
