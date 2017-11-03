import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<a routerLink="/landing"></a><router-outlet></router-outlet>',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
