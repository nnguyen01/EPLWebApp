/**
	Contains all routes of app except child routes
*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginRedirect } from './services/login-redirect.service';

const appRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [LoginRedirect]
    },

    {
        path: 'register',
        component: RegisterComponent,
        canActivate: [LoginRedirect]
    },

    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },

    {
        path: '**',
        redirectTo: '/login',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: false } // <-- debugging purposes only
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }