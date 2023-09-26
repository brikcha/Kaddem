import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UniversityComponent } from './university/university.component';
import { ModifyUniversityComponent } from './modify-university/modify-university.component';
import { AddUniversityComponent } from './add-university/add-university.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: UniversityComponent
  },
  {
    path: 'edit/:id',
    component: ModifyUniversityComponent
  },
  {
    path: 'add',
    component: AddUniversityComponent
  }
];

@NgModule({
  declarations: [
    UniversityComponent,
    ModifyUniversityComponent,
    AddUniversityComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class UniversityModule { }
