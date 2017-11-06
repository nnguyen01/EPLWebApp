import { NgModule }	from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes }   from '@angular/router';

import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app-router.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { DashboardModule } from './dashboard/dashboard.module';
//import { LandingComponent } from './dashboard/injected_views/landing/landing.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login',  component: LoginComponent },
  { path: 'dashboard',  component: DashboardComponent },
  //{ path: 'landing',  component: LandingComponent }
];
 
@NgModule({
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
	DashboardModule,
	RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: [
    AppComponent,
	LoginComponent,
	DashboardComponent,
	//LandingComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
