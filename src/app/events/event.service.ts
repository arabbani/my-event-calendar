import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IEvent } from './event.model';
import { events } from './events.constant';


@Injectable({
  providedIn: 'root'
})
export class EventService {

  private events: BehaviorSubject<IEvent[]> = new BehaviorSubject([]);

  events$: Observable<IEvent[]> = this.events.asObservable();

  constructor() { }

  getEvents(): void {
    this.newEvents(events);
  }

  private newEvents(events: IEvent[]): void {
    this.events.next(this.convertDateArrayFromServer(events));
  }

  private convertDateArrayFromServer(events: IEvent[]): IEvent[] {
    events.forEach((event: IEvent) => {
      event.start = event.start ? new Date(event.start) : null;
      event.end = event.end ? new Date(event.end) : null;
    });
    return events;
  }
}
