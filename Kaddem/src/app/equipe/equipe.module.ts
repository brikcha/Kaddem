import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipeComponent } from './equipe/equipe.component';
import {EquipeRoutingModule} from './equipe-routing.module';
import { ListEquipeComponent } from './list-equipe/list-equipe.component';
import { FormEquipeComponent } from './form-equipe/form-equipe.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ListDetailComponent } from './list-detail/list-detail.component';
import { FormDetailComponent } from './form-detail/form-detail.component';
import {EquipeService} from './Service/equipe.service';
import {DetailEquipeService} from './Service/detail-equipe.service';
import { DetailComponent } from './detail/detail.component';
import {TeamComponent} from './team.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component: ListEquipeComponent},
  {path:'new', component: FormEquipeComponent},
  {path:'update/:id', component: FormEquipeComponent},
  {path:'details/update/:id', component: FormDetailComponent},
  {path:'detailEquipe', component: ListDetailComponent},
  {path:'addDetails/:ide', component: FormDetailComponent}
];

@NgModule({
  declarations: [
    TeamComponent,
    ListEquipeComponent,
    FormEquipeComponent,
    ListDetailComponent,
    FormDetailComponent,
    DetailComponent,
      EquipeComponent
  ],
  imports: [
    CommonModule,
      EquipeRoutingModule,
      ReactiveFormsModule,
      FormsModule,
      MatInputModule,
      MatFormFieldModule,
      MatDialogModule,
      RouterModule.forChild(routes)

  ],
  providers: [
    EquipeService,
    DetailEquipeService
  ]
})
export class EquipeModule{}
