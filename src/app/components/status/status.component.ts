import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  isLoggedIn: boolean = false;
  constructor(private router: Router, private auth: AuthService) {}
  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.auth.ensureAuthenticated(token)
      .then((user) => {
        if (user.json().status === 'success') {
          this.isLoggedIn = true;
        }
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }
  onLogout(): void {
    const token = localStorage.getItem('token');
    console.log(token)
    if (token) {
      this.auth.logout(token)
      .then((user) => {
        console.log(user.json());
        if (user.json().status === 'sucess') {
          localStorage.removeItem('token');
          this.router.navigateByUrl('/login');
        }
      })
    }
  }
}