import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import 'rxjs/add/operator/switchMap'

import { Question } from '../../../models/question';

@Component({
    selector: 'app-dashboard-questions',
    templateUrl: './dashboard-questions.component.html',
    styleUrls: ['./dashboard-questions.component.css']
})
export class DashboardQuestionsComponent {
    title = 'AddQuestion';
    question: Question;
    submitted = false;

    branches = ['Clareview', 'Strathcona'];
    qTypes = ['picInput', 'writInput', 'multChoice'];
    zones = ['Nature', 'Nonfiction', 'Fiction', 'Kids'];

    onSubmit() {
        this.submitted = true;
    }

    ngOnInit() {
        this.question = new Question();
    }

    playAudio() {
        let audio = new Audio();
        audio.src = this.question.sLink;
        audio.load();
        audio.play();
    }
}