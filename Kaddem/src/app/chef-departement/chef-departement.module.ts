import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListChefDepartementComponent } from './list-chef-departement/list-chef-departement.component';
import { AddChefDepartementComponent } from './add-chef-departement/add-chef-departement.component';

import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

const routes: Routes = [
  {
    path: '',
    component: ListChefDepartementComponent
  },
  {
    path: 'add',
    component: AddChefDepartementComponent
  }

];



@NgModule({
  declarations: [
    ListChefDepartementComponent,
    AddChefDepartementComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    MatSelectModule,
    MatInputModule,
    MatDialogModule,
    MatFormFieldModule
  ]
})
export class ChefDepartementModule { }
