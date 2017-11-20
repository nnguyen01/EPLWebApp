import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ZonesComponent } from './zones/zones.component';
import { DashboardComponent } from './dashboard.component';

@NgModule({
    declarations: [
        DashboardComponent,
        ZonesComponent,
    ],

    imports: [
        CommonModule,
        FormsModule,
    ],
    providers: [
    ]
})

export class DashboardModule {}