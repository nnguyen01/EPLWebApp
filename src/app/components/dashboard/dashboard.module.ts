/**
	Module for dashboard
*/

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
import { EditBranchDialogComponent } from '../dialogs/edit-branch-dialog/edit-branch-dialog.component';
import { DeleteBranchDialogComponent } from '../dialogs/delete-branch-dialog/delete-branch-dialog.component';
import { CreateBranchDialogComponent } from '../dialogs/create-branch-dialog/create-branch-dialog.component';
import { EditQuestionDialogComponent } from '../dialogs/edit-question-dialog/edit-question-dialog.component';
import { CreateQuestionDialogComponent } from '../dialogs/create-question-dialog/create-question-dialog.component';
import { EditZoneDialogComponent } from '../dialogs/edit-zone-dialog/edit-zone-dialog.component';
import { CreateZoneDialogComponent } from '../dialogs/create-zone-dialog/create-zone-dialog.component';

@NgModule({
    declarations: [
        DashboardComponent,
        DashboardHomeComponent,
        DashboardQuestionsComponent,
        DashboardAnalyticsComponent,
        DashboardZonesComponent,
        CreateBranchDialogComponent,
        DeleteBranchDialogComponent,
        EditBranchDialogComponent,
        EditQuestionDialogComponent,
        CreateQuestionDialogComponent,
        EditZoneDialogComponent,
        CreateZoneDialogComponent
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

    entryComponents: [
        CreateBranchDialogComponent,
        CreateQuestionDialogComponent,
        CreateZoneDialogComponent,
        DeleteBranchDialogComponent,
        EditQuestionDialogComponent,
        EditBranchDialogComponent,
        EditZoneDialogComponent
    ]
})

export class DashboardModule { }