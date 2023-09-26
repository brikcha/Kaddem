import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListEquipeComponent} from './list-equipe/list-equipe.component';
import {FormEquipeComponent} from './form-equipe/form-equipe.component';
import {ListDetailComponent} from './list-detail/list-detail.component';
import {FormDetailComponent} from './form-detail/form-detail.component';

const routes: Routes = [
    {path:'', component: ListEquipeComponent},
    {path:'new', component: FormEquipeComponent},
    {path:'update/:id', component: FormEquipeComponent},
    {path:'details/update/:id', component: FormDetailComponent},
    {path:'detailEquipe', component: ListDetailComponent},
    {path:'addDetails/:ide', component: FormDetailComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EquipeRoutingModule { }
