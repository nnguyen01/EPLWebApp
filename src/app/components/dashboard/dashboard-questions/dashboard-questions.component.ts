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
    tiles = [
        {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
        {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
        {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
        {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
      ];

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private auth: AuthService
    ) { }
    ngOnInit(): void {
    }
}
