/**
Finds root and creates instance of root
**/

/* Imports */
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'zone.js';
import 'reflect-metadata';

/* Set default/ root point */
import { AppRouterModule } from './app/app-router.module';
import { environment } from './environments/environment';

/* Set up production mode */
if (environment.production) {
  enableProdMode();
}

/* Find and load root module */
platformBrowserDynamic().bootstrapModule(AppRouterModule)
  .catch(err => console.log(err));
