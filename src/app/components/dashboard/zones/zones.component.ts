import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
    selector: 'app-zones',
    templateUrl: './zones.component.html',
    styleUrls: ['./zones.component.css']
})
export class ZonesComponent implements OnInit {

    constructor(private router: Router, private auth: AuthService) { }
    ngOnInit(): void {
        const token = localStorage.getItem('token');
        if (token) {
            this.auth.ensureAuthenticated(token)
                .then((user) => {
                    if (user.json().status === 'success') {
                        // Maybe add something here?
                    }
                })
                .catch((err) => {
                    alert("Please Login Again")
                    localStorage.removeItem('token')
                    this.router.navigateByUrl('/login');
                    console.log(err);
                });
        }
    }
    onLogout(): void {
        const token = localStorage.getItem('token');
        if (token) {
            this.auth.logout(token)
                .then((user) => {
                    if (user.json().status === 'success') {
                        localStorage.removeItem('token');
                        this.router.navigateByUrl('/login');
                    }
                })
        }
    }

}
