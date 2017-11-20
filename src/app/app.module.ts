import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardModule } from './components/dashboard/dashboard.module';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
//import { ZonesComponent } from './components/dashboard/zones/zones.component';
//import { EnsureAuthenticated } from './services/ensure-authenticated.service';
import { LoginRedirect } from './services/login-redirect.service';
import { AuthService } from './services/auth.service';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        //DashboardComponent,
        //ZonesComponent,
    ],

    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        DashboardModule,
        AppRoutingModule
    ],
    providers: [
        AuthService,
        //EnsureAuthenticated,
        LoginRedirect
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }