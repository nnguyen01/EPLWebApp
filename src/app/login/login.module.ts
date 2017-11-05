import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';

import { AlertModule } from 'ngx-bootstrap';
import { AppComponent } from './login.component';

@NgModule({
  imports: [
    AlertModule.forRoot(),
    BrowserModule, 	
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
