import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ZonesComponent } from './zones/zones.component';
import { DashboardComponent } from './dashboard.component';

import { EnsureAuthenticated } from './../../services/ensure-authenticated.service';

const dashboardRoutes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [EnsureAuthenticated]
    },

    {
        path: 'zones',
        component: ZonesComponent,
        canActivate: [EnsureAuthenticated]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(dashboardRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class DashboardRoutingModule { }