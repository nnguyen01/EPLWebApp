import { Component } from '@angular/core';

@Component({
  selector: 'landing',
  //template: '<h1>{{title}}</h1><a routerLink="/landing"></a><router-outlet></router-outlet>',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  title = 'Landing';
}
