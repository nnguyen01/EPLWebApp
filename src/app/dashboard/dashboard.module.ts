import { NgModule }       from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

//import { DashboardComponent } from './dashboard.component';
import { LandingComponent } from './injected_views/landing/landing.component';

const dashboardRoutes: Routes = [
  { path: 'landing',  component: LandingComponent }
];

@NgModule({
  imports: [
		RouterModule.forChild(dashboardRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    //DashboardComponent,
	LandingComponent
  ],
  providers: [],
  //bootstrap: [DashboardComponent]
})

export class DashboardModule { }
