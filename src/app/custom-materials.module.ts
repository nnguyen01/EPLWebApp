import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatCardModule,
    MatButtonModule,
    MatButtonToggleModule
} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        MatButtonToggleModule,
    ],
    exports: [
        MatCardModule,
        MatButtonModule,
        MatButtonToggleModule,
    ]
})

export class CustomMaterialsModule { } 