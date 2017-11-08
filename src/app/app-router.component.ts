import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<h1>Angular Router</h1><nav><a routerLink="/login" routerLinkActive="active">Heroes</a></nav><router-outlet></router-outlet>'
  //templateUrl: './app.component.html'
})
export class AppRouterComponent {
  title = 'app';
}
