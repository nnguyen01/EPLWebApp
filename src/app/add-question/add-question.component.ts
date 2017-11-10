import { Component } from '@angular/core';
import { Question } from './question';

@Component({
  selector: 'add-question',
  // template: '<h1>{{title}}</h1><a routerLink="/dashboard"></a><router-outlet></router-outlet>',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css'],

})
export class AddQuestionComponent {
  title = 'AddQuestion';
  question: Question;

  ngOnInit() {
    this.question = new Question();
  }
}
