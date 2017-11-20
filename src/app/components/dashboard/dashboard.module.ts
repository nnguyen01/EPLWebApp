import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ZonesComponent } from './zones/zones.component';
import { DashboardComponent } from './dashboard.component';

import { EnsureAuthenticated } from './../../services/ensure-authenticated.service';

import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
    declarations: [
        DashboardComponent,
        ZonesComponent
    ],

    imports: [
        CommonModule,
        FormsModule,
        DashboardRoutingModule
    ],
    providers: [
        EnsureAuthenticated
    ]
})

export class DashboardModule { }