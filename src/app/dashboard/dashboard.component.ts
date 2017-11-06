import { Component } from '@angular/core';

@Component({
  selector: 'dashboard', 
  template: '<h1>{{title}}</h1><a routerLink="/dashboard"></a><router-outlet></router-outlet>',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  title = 'Dashboard';
}
