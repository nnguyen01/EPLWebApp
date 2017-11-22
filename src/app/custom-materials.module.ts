import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatCardModule,
} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        MatCardModule
    ],
    exports: [
        MatCardModule
    ]
})

export class CustomMaterialsModule { } 