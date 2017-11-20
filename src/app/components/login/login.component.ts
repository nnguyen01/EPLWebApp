import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  //public credentials: Boolean = true;
  user: User = new User();
  constructor(private router: Router, private auth: AuthService) {}
  onLogin(Login: NgForm): void {
    if (Login.valid) {
      this.auth.login(this.user)
      .then((user) => {
        console.log(user.json());
        localStorage.setItem('token', user.json().auth_token);
        this.router.navigateByUrl('/dashboard');
      })
      .catch((err) => {
        //this.credentials = false;
        alert("The username and password combination do not match our records.")
        console.log(err);
      });
    }
  }
}