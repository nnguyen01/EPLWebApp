import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

import { EnsureAuthenticated } from './../../services/ensure-authenticated.service';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { DashboardQuestionsComponent } from './dashboard-questions/dashboard-questions.component';
import { DashboardAnalyticsComponent } from './dashboard-analytics/dashboard-analytics.component';

const dashboardRoutes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [EnsureAuthenticated],
        children: [ // TODO: Find a way to only fire canActivate once
            {
                path: '',
                component: DashboardHomeComponent
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
            }
        ]
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