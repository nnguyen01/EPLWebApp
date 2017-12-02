/**
	Dashboard Router

	Contains all the routes related to the dashboard
*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

import { EnsureAuthenticated } from './../../services/ensure-authenticated.service';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { DashboardQuestionsComponent } from './dashboard-questions/dashboard-questions.component';
import { DashboardAnalyticsComponent } from './dashboard-analytics/dashboard-analytics.component';
import { DashboardZonesComponent } from './dashboard-zones/dashboard-zones.component';
import { DashboardZoneResolver } from '../../services/dashboard-zone-resolver.service';

const dashboardRoutes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [EnsureAuthenticated],
        children: [
            {
                path: 'home',
                component: DashboardHomeComponent,
                canActivate: [EnsureAuthenticated],
            },
            {
                path:'questions',
                component: DashboardQuestionsComponent,
                canActivate: [EnsureAuthenticated]
            },
            {
                path:'analytics',
                component: DashboardAnalyticsComponent,
                canActivate: [EnsureAuthenticated]
            },
            {
                path: ':branch',
                component: DashboardZonesComponent,
                canActivate: [EnsureAuthenticated],
                resolve: {
                    zone: DashboardZoneResolver
                },
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(dashboardRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: [
        DashboardZoneResolver
    ]
})

export class DashboardRoutingModule { }