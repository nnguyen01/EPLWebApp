/**
Main router and root component
- Declares root (itself/ this)
- Routes the main application pages 
   (including default/ no route and wildcard routes)
- Keeps track of other routers
- Creates nessecarily components
**/

/* Imports */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule }	from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertModule } from 'ngx-bootstrap';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

/* Components */
import { AppRouterComponent } from './app-router.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { AddQuestionComponent } from './components/add-question/add-question.component';

/* Services */
import { EnsureAuthenticated } from './services/ensure-authenticated.service';
import { LoginRedirect } from './services/login-redirect.service';
import { AuthService } from './services/auth.service';

/* Other routers (Child routers) */
import { DashboardModule } from './components/dashboard/dashboard.module';

/* All routes */
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginRedirect]
  },

  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate:
    [EnsureAuthenticated]
  },

  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [LoginRedirect]
  },

  { path: 'add-question', 
    component: AddQuestionComponent 
  },

  { 
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
]

@NgModule({
  /* Module imports here */
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    DashboardModule,
    HttpModule,
    FormsModule,
	RouterModule.forRoot(routes, { enableTracing: true }) //Adds the routes
  ],
  /* Make routes viewable to those who import this module */
  exports: [ RouterModule ],
  /* Make the components */
  declarations: [
    AppRouterComponent,
    LoginComponent,
    RegisterComponent,
    AddQuestionComponent
  ],
  providers: [
    AuthService,
    EnsureAuthenticated,
    LoginRedirect
  ],
  /* Sets up bootstrap (Declares root component */ 
  bootstrap: [AppRouterComponent]
})

export class AppRouterModule { }
