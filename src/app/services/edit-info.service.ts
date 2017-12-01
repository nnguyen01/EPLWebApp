import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Question } from '../models/question';

@Injectable()
export class EditInfoService {
    private BASE_URL: string = 'http://162.246.156.95:5000'
    private headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    constructor(private http: HttpClient) { }

    editBranch(oldBranch: string, newBranch: string, iLink: string): Promise<any> {
        oldBranch = encodeURIComponent(oldBranch.trim());
        newBranch = encodeURIComponent(newBranch.trim());
        if (iLink == null) {
            iLink = "%20"
        } else {
            iLink = encodeURIComponent(iLink.trim());
        }
        let urlParam = '/' + oldBranch + '/' + newBranch + '/' + iLink;
        let url: string = `${this.BASE_URL}/updateBranch` + urlParam;
        return this.http.post(url, { headers: this.headers }).toPromise();
    }

    editZone(beaconID: string, oldZone: string,
        newZone: string, oldBranch: string, newBranch: string,
        category: string, color: string): Promise<any> {
        oldZone = oldZone.replace(/\s/g, "_"); // Revert only for query
        newZone = newZone.replace(/\s/g, "_"); // Revert only for query
        oldZone = encodeURIComponent(oldZone.trim());
        newZone = encodeURIComponent(newZone.trim());
        color = encodeURIComponent(color.trim());
        if (category == null) {
            category = "%20";
        } else {
            category = encodeURIComponent(category.trim());
        }
        if (color == null) {
            color = "%20";
        } else {
            color = encodeURIComponent(color.trim());
        }
        let urlParam = '/' + beaconID + '/' + oldZone + '/' + newZone
            + '/' + oldBranch + '/' + newBranch + '/' + category + '/' + color;
        let url: string = `${this.BASE_URL}/updateZone` + urlParam;
        return this.http.post(url, { headers: this.headers }).toPromise();
    }

    editQuestion(question: Question): Promise<any> {
        if (question.Choices != null || question.Choices != "") {
            question.Choices = question.Choices.replace(/\,/g, "|_|");
        }
        if (question.zone != null) {
            question.zone = question.zone.replace(/\s/g, "_");
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