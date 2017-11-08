import { NgModule }	from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes }   from '@angular/router';

/* Root module */
import { AlertModule } from 'ngx-bootstrap';

/* Components */
import { AppRouterComponent } from './app-router.component';
//import { LoginComponent } from './login/login.component';
//import { DashboardComponent } from './dashboard/dashboard.component';

/* Other routers (Child routers) */
//import { DashboardModule } from './dashboard/dashboard.module';

/* All routes */
const routes: Routes = [
  //{ path: 'login',  component: LoginComponent },
  //{ path: 'dashboard',  component: DashboardComponent },
  
  //{ path: '', redirectTo: '/login', pathMatch: 'full' }, //Default route
  //{ path: '**', component: LoginComponent } //Wildcard route
];

@NgModule({
  /* Module imports here */
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
	//DashboardModule,
	RouterModule.forRoot(routes, { enableTracing: true }) //Adds the routes
  ],
  /* Make routes viewable to those who import this module */
  //exports: [ RouterModule ],
  declarations: [
    AppRouterComponent,
	//LoginComponent,
  ],
  bootstrap: [AppRouterComponent]
})
export class AppRouterModule { }
