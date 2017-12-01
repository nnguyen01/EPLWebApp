import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Question } from '../models/question';

@Injectable()
export class CreateInfoService {
    private BASE_URL: string = 'http://162.246.156.95:5000'
    private headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    constructor(private http: HttpClient) { }

    createBranch(branch: string, iLink?: string): Promise<any> {
        let urlParam: string;
        branch = encodeURIComponent(branch.trim());
        if (iLink == null) {
            iLink = "%20"
        } else {
            iLink = encodeURIComponent(iLink.trim());
        }
        urlParam = '/' + branch + '/' + iLink;
        let url: string = `${this.BASE_URL}/createBranch` + urlParam;
        return this.http.post(url, { headers: this.headers }).toPromise();
    };

    createZone(beaconID: string, zone: string, branch: string,
        category: string, color: string): Promise<any> {
        zone = encodeURIComponent(zone.trim());
        branch = encodeURIComponent(branch.trim());
        if (beaconID == null) {
            beaconID = "%20";
        } else {
            beaconID = encodeURIComponent(beaconID.trim());
        }
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
        let urlParam = '/' + beaconID + '/' + zone + '/' + branch
            + '/' + category + '/' + color
        let url: string = `${this.BASE_URL}/createZone` + urlParam;
        return this.http.post(url, { headers: this.headers }).toPromise();
    };

    createQuestion(Prompt: string, Choices: string, Solution: string, zone: string,
        branch: string, qType: string, iLink: string, sLink: string, blanks: string): Promise<any> {
        if (Choices == null) {
            Choices = "%20"
        } else {
            var regex = new RegExp(',', 'g');
            Choices = Choices.replace(regex, "|_|");
        }
        Prompt = encodeURIComponent(Prompt.trim());
        Solution = encodeURIComponent(Solution.trim());
        zone = encodeURIComponent(zone.trim());
        branch = encodeURIComponent(branch.trim());
        if (iLink == null) {
            iLink = "%20"
        } else {
            iLink = encodeURIComponent(iLink.trim());
        }
        if (sLink == null) {
            sLink = "%20"
        } else {
            sLink = encodeURIComponent(sLink.trim());
        }
        if (blanks == null) {
            blanks = "%20"
        } else {
            blanks = encodeURIComponent(blanks.trim());
        }

        let urlParam: string = '/' + Prompt + '/' + Choices
            + '/' + Solution + '/' + zone + '/' + branch + '/' + qType
            + '/' + iLink + '/' + sLink + '/' + blanks
        let url: string = `${this.BASE_URL}/createQuestion` + urlParam;
        return this.http.post(url, { headers: this.headers }).toPromise();
    }
}