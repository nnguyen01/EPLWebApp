import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import 'rxjs/add/operator/switchMap'

@Component({
    selector: 'app-dashboard-questions',
    templateUrl: './dashboard-questions.component.html',
    styleUrls: ['./dashboard-questions.component.css']
})
export class DashboardQuestionsComponent implements OnInit {

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private auth: AuthService
    ) { }
    ngOnInit(): void {
    }
}
