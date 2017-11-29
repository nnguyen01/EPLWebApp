import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { slideInDownAnimation } from '../../animations';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
    isLaunched: boolean = true;
    constructor(
        private router: Router,
        private auth: AuthService) { }

    ngOnInit(): void {
        const token = localStorage.getItem('token');
        if (token) {
            this.auth.ensureAuthenticated(token)
                .then((user) => {
                    console.log(user);
                    if (user.status === 'success') {
                        this.router.navigateByUrl('/dashboard/home');
                    }
                })
                .catch((err) => {
                    alert("Please Login Again")
                    localStorage.removeItem('token')
                    this.router.navigateByUrl('/login');
                    console.log(err);
                })
        }
    }


    onLogout(): void {
        const token = localStorage.getItem('token');
        if (token) {
            this.auth.logout(token)
                .then((user) => { // TODO: Catch error and do something (not sure what)
                    if (user.status === 'success') {
                        localStorage.removeItem('token');
                        this.router.navigateByUrl('/login');
                    }
                }
                )
        } else {
            this.router.navigateByUrl('/login');
        }
    }
}