import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomMaterialsModule } from './custom-materials.module'
import { AppRoutingModule } from './app-routing.module';
import { DashboardModule } from './components/dashboard/dashboard.module';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginRedirect } from './services/login-redirect.service';

import { AuthService } from './services/auth.service'
import { GetInfoService } from './services/get-info.service'
import { DeleteInfoService } from './services/delete-info.service';
import { CreateInfoService } from './services/create-info.service';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
    ],

    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule,
        CustomMaterialsModule,
        DashboardModule,
        AppRoutingModule
    ],
    providers: [
        AuthService,
        CreateInfoService,
        DeleteInfoService,
        GetInfoService,
        LoginRedirect
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }