import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatCardModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatToolbarModule
} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatGridListModule,
        MatIconModule,
        MatListModule,
        MatMenuModule,
        MatToolbarModule
    ],
    exports: [
        MatCardModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatGridListModule,
        MatIconModule,
        MatListModule,
        MatMenuModule,
        MatToolbarModule
    ]
})

export class CustomMaterialsModule { } 