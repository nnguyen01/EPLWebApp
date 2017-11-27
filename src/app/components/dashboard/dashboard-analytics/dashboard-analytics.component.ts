import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { slideInDownAnimation } from '../../../animations';

@Component({
    selector: 'app-dashboard-analytics',
    templateUrl: './dashboard-analytics.component.html',
    styleUrls: ['./dashboard-analytics.component.css'],
    animations: [ slideInDownAnimation ]
})
export class DashboardAnalyticsComponent implements OnInit {
    @HostBinding('@routeAnimation') routeAnimation = true;
    @HostBinding('style.display')   display = 'block';
    @HostBinding('style.position')  position = 'absolute';
    
    constructor(private router: Router, private auth: AuthService) { }
    ngOnInit(): void {
    }
}
