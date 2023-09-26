import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormationListComponent } from './formation-list/formation-list.component';
import { Routes, RouterModule } from '@angular/router';
import { FormationAddComponent } from './formation-add/formation-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import { DeatailformationComponent } from './deatailformation/deatailformation.component';



const routes: Routes =[
   {
    path: '',
    component: FormationListComponent,
  
  },
  {
    path: 'add',
    component: FormationAddComponent,
  
  },
  {
    path: 'details/:id',
    component: DeatailformationComponent,
  
  }


]; 


@NgModule({
  declarations: [
    FormationListComponent,
    FormationAddComponent,
    DeatailformationComponent
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
    MatDialogModule,
    
  ]
})
export class FormationModule { }
