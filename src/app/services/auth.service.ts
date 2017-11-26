import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {
    private BASE_URL: string = 'http://162.246.156.95:5000/auth';
    private headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    constructor(private http: HttpClient) { }
    login(user: User): Promise<any> {
        let url: string = `${this.BASE_URL}/login`;
        return this.http.post(url, user, { headers: this.headers }).toPromise();
    }
    register(user: User): Promise<any> {
        let url: string = `${this.BASE_URL}/register`;
        return this.http.post(url, user, { headers: this.headers }).toPromise();
    }
    ensureAuthenticated(token): Promise<any> {
        let url: string = `${this.BASE_URL}/status`;
        let headers: HttpHeaders = new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        });
        return this.http.get(url, { headers: headers }).toPromise();
    }
    logout(token): Promise<any> {
        let url: string = `${this.BASE_URL}/logout`;
        let headers: HttpHeaders = new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        });
        return this.http.post(url, null, { headers: headers }).toPromise();
    }
}