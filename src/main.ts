/**
	Finds root and creates intance of root
*/

/* Imports */
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

/* Sets default route point */
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

/* Set up production mode */
if (environment.production) {
  enableProdMode();
}

/* Find and load root module/ component */
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
