import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';

import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';


export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {\
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard', component: DashboardComponent },
    { path: 'user-profile', component: UserProfileComponent },
    // { path: 'table-list',     component: TableListComponent },
    {
        path: 'etudiant',

        loadChildren: () => import('../../etudiant/etudiant.module').then(m => m.EtudiantModule)

    },
    {
        path: 'formation',

        loadChildren: () => import('../../formation/formation.module').then(t => t.FormationModule)

    },
    {
        path: 'departement',

        loadChildren: () => import('../../departement/departement.module').then(m => m.DepartementModule)

    },
    {
        path: 'chefdepartement',

        loadChildren: () => import('../../chef-departement/chef-departement.module').then(m => m.ChefDepartementModule)

    },

    {
        path: 'equipe',
        loadChildren: () => import('../../equipe/equipe.module').then(m => m.EquipeModule)

    },
    { 
        path: 'contract',     
        loadChildren: () => import('../../contrat/contract.module').then(m => m.ContractModule)
    },
    {
        path: 'university',
        loadChildren: () => import('../../university/university.module').then(m => m.UniversityModule)
    },
    {
        path: 'events',
        loadChildren: () => import('../../event/event.module').then(m => m.EventModule)
    },
    {
        path: 'profile',
        loadChildren: () => import('../../profile/profile.module').then(m => m.ProfileModule)
    }
    // { path: 'icons',          component: IconsComponent },
    // { path: 'maps',           component: MapsComponent },
    // { path: 'notifications',  component: NotificationsComponent },
    // { path: 'upgrade',        component: UpgradeComponent },
];
