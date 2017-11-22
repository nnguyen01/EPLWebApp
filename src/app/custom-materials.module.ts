import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatCardModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatGridListModule,
    MatIconModule,
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
        MatToolbarModule
    ],
    exports: [
        MatCardModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatGridListModule,
        MatIconModule,
        MatToolbarModule
    ]
})

export class CustomMaterialsModule { } 