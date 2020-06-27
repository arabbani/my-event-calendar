import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IEvent } from '../event.model';
import { EventService } from '../event.service';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  events$: Observable<IEvent[]>;

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.events$ = this.eventService.events$;
  }

}
