import { Component, OnInit } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { colors } from '../../shared/colors';
import { IEvent } from '../event.model';
import { EventService } from '../event.service';



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
    events.forEach(event => {
      if (currentColorIndex >= numberOfColors) {
        currentColorIndex = 0;
      }
      this.events.push({
        title: event.name,
        start: event.start as Date,
        end: event.end as Date,
        color: {
          primary: colors[currentColorIndex].color,
          secondary: colors[currentColorIndex].color
        },
        meta: {
          cssClass: colors[currentColorIndex].cssClass
        }
      });
      currentColorIndex++;
    });
  }

}
