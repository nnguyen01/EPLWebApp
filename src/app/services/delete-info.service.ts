import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DeleteInfoService {
    private BASE_URL: string = 'http://162.246.156.95:5000'
    private headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' }); 
    constructor(private http: HttpClient) { }
    
    deleteBranch(branch: string): Promise<any> {
        branch = encodeURIComponent(branch.trim());
        let urlParam = '/' + branch
        let url: string = `${this.BASE_URL}/deleteBranch` + urlParam;
        return this.http.delete(url, { headers: this.headers }).toPromise();
    };

    deleteQuestion(id: number): Promise<any> {
        let urlParam = '/' + String(id)
        let url: string = `${this.BASE_URL}/deleteQuestion` + urlParam;
        return this.http.delete(url, { headers: this.headers }).toPromise();
    }
}