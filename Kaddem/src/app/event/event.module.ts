import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddEventComponent } from './add-event/add-event.component';
import { EventsComponent } from './events/events.component';
import { ModifyEventComponent } from './modify-event/modify-event.component';
import { ErrorsComponent } from './../errors/errors.component';

const routes: Routes = [
  {
    path: '',
    component: EventsComponent
  },
  {
    path: 'edit/:id',
    component: ModifyEventComponent
  },
  {
    path: 'add',
    component: AddEventComponent
  }
]

@NgModule({
  declarations: [
    EventsComponent,
    ModifyEventComponent,
    AddEventComponent,
    ErrorsComponent
  ],
  imports: [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule.forChild(routes)
  ]
})
export class EventModule { }
