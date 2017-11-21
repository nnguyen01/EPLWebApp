import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
    selector: 'app-dashboard-analytics',
    templateUrl: './dashboard-analytics.component.html',
    styleUrls: ['./dashboard-analytics.component.css']
})
export class DashboardAnalyticsComponent implements OnInit {
    constructor(private router: Router, private auth: AuthService) { }
    ngOnInit(): void {
    }
}
