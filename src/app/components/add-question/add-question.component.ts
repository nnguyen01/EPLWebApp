import { Component } from '@angular/core';
import { Question } from '../../models/question';

@Component({
  selector: 'add-question',
  // template: '<h1>{{title}}</h1><a routerLink="/dashboard"></a><router-outlet></router-outlet>',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css'],

})
export class AddQuestionComponent {
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

    errorHandler(event) {
      
    }
}
