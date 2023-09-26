import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListdepartementComponent } from './listdepartement/listdepartement.component';
import { AddDepartementComponent } from './add-departement/add-departement.component';
import { ModifierDepartementComponent } from './modifier-departement/modifier-departement.component';

import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AssignDepartmentDialogComponent } from './assign-department-dialog/assign-department-dialog.component';
import { MatSelectModule } from '@angular/material/select';


const routes: Routes =[
  {
   path: '',
   component: ListdepartementComponent
 },
 {
   path: 'add',
   component: AddDepartementComponent
 },
 {
   path: 'edit/:id',
   component: ModifierDepartementComponent
 }
]; 



@NgModule({
  declarations: [
    ListdepartementComponent,
    AddDepartementComponent,
    ModifierDepartementComponent,
    AssignDepartmentDialogComponent
  ],
  imports: [
  CommonModule,
  ReactiveFormsModule,
  FormsModule,
  MatDialogModule,
  MatSelectModule,
  RouterModule.forChild(routes)
  ],
  providers: [
  ]
})
export class DepartementModule { }
