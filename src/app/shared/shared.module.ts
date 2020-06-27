import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CalendarModule } from 'angular-calendar';

import { CalendarHeaderComponent } from './calendar-header/calendar-header.component';
import { CalendarComponent } from './calendar/calendar.component';


const COMPONENTS = [CalendarHeaderComponent, CalendarComponent];

@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    CalendarModule
  ],
  exports: COMPONENTS
})
export class SharedModule { }
