import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEquipesComponent } from './list-equipes/list-equipes.component';
import { AddEquipesComponent } from './add-equipes/add-equipes.component';
import { Routes } from '@angular/router';
import { DetailEquipeComponent } from './detail-equipe/detail-equipe.component';



const routes: Routes =[
  {
   path: '',
   component: ListEquipesComponent,
 
 },
 {
   path: 'add',
   component: AddEquipesComponent,
 
 },
 {
  path: 'detail/:id',
  component: DetailEquipeComponent,

},

 


]; 


@NgModule({
  declarations: [
    ListEquipesComponent,
    AddEquipesComponent,
    DetailEquipeComponent
  ],
  imports: [

  CommonModule
  ]
})
export class EquipesModule { }
