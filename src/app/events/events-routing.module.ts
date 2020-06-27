import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EventListComponent } from './event-list/event-list.component';
import { EventComponent } from './event/event.component';
import { EventsComponent } from './events/events.component';


const routes: Routes = [
  {
    path: '',
    component: EventListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule {
  static readonly COMPONENTS = [EventListComponent, EventsComponent, EventComponent];
}
