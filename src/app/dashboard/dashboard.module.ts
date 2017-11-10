/**
Router for the dashboard
- Creates nessecarily components
**/

/* Imports */
import { NgModule }  from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

/* Components regarding the dashboard */
import { DashboardComponent } from './dashboard.component';
import { LandingComponent } from './injected_views/landing/landing.component';
//	import { QuestionComponent } from './injected_views/questions/questions.component';
//import { AnalyticsComponent } from './injected_views/analytics/analytics.component';

/* All routes regarding the dashboard */
const dashboardRoutes: Routes = [
  //{ path: 'dashboard/landing',  component: LandingComponent },
  { path: '',  component: DashboardComponent,
	children:[ 
		{ path: 'landing', loadChildren: './injected_views/landing/landing.component' },]
  },
];

@NgModule({
  /* Use child routing */
  imports: [ RouterModule.forChild(dashboardRoutes) ],
  /* Make routes available to those who import this module */
  exports: [ RouterModule ],
  /* Make the components */
  declarations: [
    DashboardComponent,
	LandingComponent
  ]
})

export class DashboardModule { }
