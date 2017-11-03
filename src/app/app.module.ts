import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';

import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { LandingComponent } from '../landing/landing.component';

@NgModule({
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
	RouterModule.forRoot([
      {
        path: 'landing',
        component: LandingComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
	LandingComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
