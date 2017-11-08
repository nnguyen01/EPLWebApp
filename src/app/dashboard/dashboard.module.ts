import { NgModule }  from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

/* Components regarding the dashboard */
import { DashboardComponent } from './dashboard.component';
import { LandingComponent } from './injected_views/landing/landing.component';

/* All routes regarding the dashboard */
const dashboardRoutes: Routes = [
  { path: 'landing',  component: LandingComponent }
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
