import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ZonesComponent } from './components/dashboard/zones/zones.component';
import { EnsureAuthenticated } from './services/ensure-authenticated.service';
import { LoginRedirect } from './services/login-redirect.service';

/* Manages routing paths */
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
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [EnsureAuthenticated]
    },

    {
        path: 'zones',
        component: ZonesComponent,
        canActivate: [EnsureAuthenticated]
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
            { enableTracing: true } // <-- debugging purposes only
        )
    ],
    exports: [
        RouterModule
    ]
})  
export class AppRoutingModule { }