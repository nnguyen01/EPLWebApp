import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard.component';

import { EnsureAuthenticated } from './../../services/ensure-authenticated.service';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { DashboardQuestionsComponent } from './dashboard-questions/dashboard-questions.component';
import { DashboardAnalyticsComponent } from './dashboard-analytics/dashboard-analytics.component';

import { CustomMaterialsModule } from '../../custom-materials.module';
import { DashboardZonesComponent } from './dashboard-zones/dashboard-zones.component';
import { EditBranchDialogComponent } from './dialogs/edit-branch-dialog/edit-branch-dialog.component';

@NgModule({
    declarations: [
        DashboardComponent,
        DashboardHomeComponent,
        DashboardQuestionsComponent,
        DashboardAnalyticsComponent,
        DashboardZonesComponent,
        EditBranchDialogComponent,
    ],

    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CustomMaterialsModule,
        DashboardRoutingModule
    ],

    providers: [
        EnsureAuthenticated
    ],

    entryComponents: [EditBranchDialogComponent]
})

export class DashboardModule { }