import { Component, Input } from '@angular/core';
import { Question } from './question';

@Component({
    selector: 'choices-creator',
    template: `
    <h5>[FOR multChoice QUESTIONS] Enter the multiple choices, separated by commas</h5>

    <input #box
    (keyup.enter)="update(box.value)"
    (blur)="update(box.value)">

    <p>{{value}}</p>
    `
  })
  export class ChoicesCreator {
    @Input() question: Question;
    value = '';

    update(value: string) {
      this.value = value;
      this.question.Choices = value;
    }
  }
