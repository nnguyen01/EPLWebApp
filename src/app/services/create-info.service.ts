import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CreateInfoService {
    private BASE_URL: string = 'http://162.246.156.95:5000'
    private headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' }); 
    constructor(private http: HttpClient) { }
    
    createBranch(branch: string, iLink?: string): Promise<any> {
        let urlParam: string;
        branch = encodeURIComponent(branch.trim());
        if (iLink !== null) {
            iLink = encodeURIComponent(iLink.trim());
            urlParam = '/' + branch + '/' + iLink;
        } else {
            urlParam = '/' + branch
        }
        let url: string = `${this.BASE_URL}/createBranch` + urlParam;
        return this.http.post(url, { headers: this.headers }).toPromise();
    };
}