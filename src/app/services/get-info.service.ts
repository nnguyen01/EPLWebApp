import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable()
export class GetInfoService {
    private BASE_URL: string = 'http://162.246.156.95:5000'
    private headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' }); 
    constructor(private http: HttpClient) { }
    
    getBranch(): Promise<any> {
        let url: string = `${this.BASE_URL}/getBranch`;
        return this.http.get(url, { headers: this.headers }).toPromise();
    };
}