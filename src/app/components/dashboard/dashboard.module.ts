import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard.component';

import { EnsureAuthenticated } from './../../services/ensure-authenticated.service';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { DashboardQuestionsComponent } from './dashboard-questions/dashboard-questions.component';
import { DashboardAnalyticsComponent } from './dashboard-analytics/dashboard-analytics.component';

import { CustomMaterialsModule } from '../../custom-materials.module';
import { DashboardZonesComponent } from './dashboard-zones/dashboard-zones.component';
import { DashboardInfoService } from '../../services/dashboard-info.service';

@NgModule({
    declarations: [
        DashboardComponent,
        DashboardHomeComponent,
        DashboardQuestionsComponent,
        DashboardAnalyticsComponent,
        DashboardZonesComponent,
    ],

    imports: [
        CommonModule,
        FormsModule,
        CustomMaterialsModule,
        DashboardRoutingModule
    ],

    providers: [
        EnsureAuthenticated,
        DashboardInfoService
    ]
})

export class DashboardModule { }