import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isLoggedIn: boolean = false;
  constructor(private router: Router, private auth: AuthService) { }
  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.auth.ensureAuthenticated(token)
        .then((user) => {
          if (user.json().status === 'success') {
            // Stub to keep them authenticated
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
