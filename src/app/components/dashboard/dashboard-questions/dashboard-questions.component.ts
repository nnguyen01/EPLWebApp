/**
	Questions Tab
	
	Not implemented yet. Basic form structure and routing is complete
*/

import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

import { slideInDownAnimation } from '../../../animations';

@Component({
    selector: 'app-dashboard-questions',
    templateUrl: './dashboard-questions.component.html',
    styleUrls: ['./dashboard-questions.component.css'],
    animations: [slideInDownAnimation]
})
export class DashboardQuestionsComponent {
    @HostBinding('@routeAnimation') routeAnimation = true;
    @HostBinding('style.display') display = 'block';
    @HostBinding('style.position') position = 'absolute';

    loaded: boolean = false;
    empty: boolean = false;

    constructor() { }

    ngOnInit() {
    }
}