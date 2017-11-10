/**
Main router and root component
- Declares root (itself/ this)
- Routes the main application pages 
   (inlcuding default/ no route and wildcard routes)
- Keeps track of other routers
- Creates nessecarily components
**/

/* Imports */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule }	from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertModule } from 'ngx-bootstrap';

/* Components */
import { AppRouterComponent } from './app-router.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddQuestionComponent } from './add-question/add-question.component';

/* Other routers (Child routers) */
import { DashboardModule } from './dashboard/dashboard.module';
import { AddQuestionModule } from './add-question/add-question.module';

/* All routes */
const routes: Routes = [
  { path: 'login',  component: LoginComponent },
  { path: 'dashboard',  component: DashboardComponent },

  { path: 'add-question', component: AddQuestionComponent }, // addQuestion route
  { path: '', redirectTo: '/login', pathMatch: 'full' }, //Default route
  { path: '**', component: LoginComponent } //Wildcard route
];

@NgModule({
  /* Module imports here */
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
  AddQuestionModule,
	DashboardModule,
	RouterModule.forRoot(routes, { enableTracing: true }) //Adds the routes
  ],
  /* Make routes viewable to those who import this module */
  exports: [ RouterModule ],
  /* Make the components */
  declarations: [
    AppRouterComponent,
	LoginComponent,
  ],
  /* Sets up bootstrap (Delcares root component */ 
  bootstrap: [AppRouterComponent]
})

export class AppRouterModule { }
