import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import 'rxjs/add/operator/switchMap'

import { Question } from '../../../models/question';
import { slideInDownAnimation } from '../../../animations';

@Component({
    selector: 'app-dashboard-questions',
    templateUrl: './dashboard-questions.component.html',
    styleUrls: ['./dashboard-questions.component.css'],
    animations: [ slideInDownAnimation ]
})
export class DashboardQuestionsComponent {
    @HostBinding('@routeAnimation') routeAnimation = true;
    @HostBinding('style.display')   display = 'block';
    @HostBinding('style.position')  position = 'absolute';
    
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