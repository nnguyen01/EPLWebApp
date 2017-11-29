import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GetInfoService {
    private BASE_URL: string = 'http://162.246.156.95:5000'
    private headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' }); 
    constructor(private http: HttpClient) { }
    
    getBranch(): Promise<any> {
        let url: string = `${this.BASE_URL}/getBranch`;
        return this.http.get(url, { headers: this.headers }).toPromise();
    };

    getZones(branch: string): Observable<any> {
        let urlParam = encodeURIComponent(branch.trim());
        let url: string = `${this.BASE_URL}/getZone/` + urlParam;
        return this.http.get(url, { headers: this.headers });
    }

    getQuestions(branch: string, zone: string): Promise<any> {
        branch = encodeURIComponent(branch.trim());
        zone = encodeURIComponent(zone.trim());
        let urlParam = zone + '/' + branch;
        let url: string = `${this.BASE_URL}/getQuestion/` + urlParam;
        return this.http.get(url, { headers: this.headers }).toPromise();
    }
}