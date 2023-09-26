import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EtudiantListComponent } from './etudiant-list/etudiant-list.component';
import { EtudiantAddComponent } from './etudiant-add/etudiant-add.component';
import { EtudiantUpdateComponent } from './etudiant-update/etudiant-update.component';
import { Routes, RouterModule } from '@angular/router';
import { DetailEtudiantComponent } from './detail-etudiant/detail-etudiant.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EtudiantErrorComponent } from './etudiant-error/etudiant-error.component';

const routes: Routes =[
   {
    path: '',
    component: EtudiantListComponent,
  
  },
  {
    path: 'add',
    component: EtudiantAddComponent,
  
  },
  {
    path: 'details/:id',
    component: DetailEtudiantComponent,
  
  }


]; 

@NgModule({
  declarations: [
    EtudiantListComponent,
    EtudiantAddComponent,
    EtudiantUpdateComponent,
    DetailEtudiantComponent,
    EtudiantErrorComponent
  ],
  imports: [

CommonModule,
  RouterModule.forChild(routes),
  FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
  ]
})
export class EtudiantModule { }
