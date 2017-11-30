import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { slideInDownAnimation } from '../../animations';

import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

import { MatRipple } from '@angular/material';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
    @ViewChild(MatRipple) ripple: MatRipple;
    isLaunched: boolean = true;
    constructor(
        private router: Router,
        private auth: AuthService,
        private iconRegistry: MatIconRegistry,
        private sanitizer: DomSanitizer) {
        iconRegistry
            .addSvgIcon('menu',
            sanitizer.bypassSecurityTrustResourceUrl('assets/img/menu.svg'))
            .addSvgIcon('add',
            sanitizer.bypassSecurityTrustResourceUrl('assets/img/add.svg'));
    }

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