import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';
//import { NgForm } from '@angular/forms/src/directives/ng_form';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent {
	emailFormControl = new FormControl('', [
		Validators.required,
		Validators.email,
	]);
  
    // Without placeholder it gives html errors that don't break..
    user: User = {}; //= new User();
    constructor(private router: Router, private auth: AuthService) { }
    onLogin(Login: NgForm): void {
        if (Login.valid) {
            this.auth.login(this.user)
                .then((user) => {
                    console.log(user);
                    localStorage.setItem('token', user.auth_token);
                    this.router.navigateByUrl('/dashboard');
                })
                .catch((err) => {
                    console.log(err)
                    if (err.status === 0) {
                        alert("Cannot connect to the internet. Please check your connection.")
                    }
                    if (err.status === 404) {
                        alert("The username and password combination do not match our records.")
                    }
                });
        }
    }
}