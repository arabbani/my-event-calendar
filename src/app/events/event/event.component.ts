import { Component, Input } from '@angular/core';
import { IEvent } from '../event.model';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent {

  @Input() event: IEvent;

}
