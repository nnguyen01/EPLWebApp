import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<a routerLink="/landing"></a><router-outlet></router-outlet>',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class AppComponent {
  title = 'app';
}
