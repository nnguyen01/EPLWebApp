import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Question } from '../models/question';

@Injectable()
export class EditInfoService {
    private BASE_URL: string = 'http://162.246.156.95:5000'
    private headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    constructor(private http: HttpClient) { }

    editQuestion(question: Question): Promise<any> {
        if (question.Choices != null || question.Choices != "") {
            question.Choices = question.Choices.replace(/\,/g, "|_|");
        }
        for (const property in question) {
            if (question[property] == null || question[property] == "") {
                question[property] = "%20";
            } else {
                question[property] = encodeURIComponent(question[property]);
            }
        }
        let urlParam: string = '/' + question.id + '/' + question.Prompt + '/' + question.Choices
            + '/' + question.Solution + '/' + question.zone + '/' + question.branch + '/' + question.qType
            + '/' + question.iLink + '/' + question.sLink + '/' + question.blanks
        let url: string = `${this.BASE_URL}/updateQuestion` + urlParam;
        return this.http.post(url, { headers: this.headers }).toPromise();
    };
}