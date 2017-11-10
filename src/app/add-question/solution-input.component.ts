import { Component, Input } from '@angular/core';
import { Question } from './question';

@Component({
    selector: 'solution-input',
    template: `
    <h5> What is the Solution? (type a choice as the solution if multChoice-type question)</h5>

    <input #box
    (keyup.enter)="update(box.value)"
    (blur)="update(box.value)">

    <p>{{value}}</p>
    `
  })
  export class SolutionInput {
    @Input() question: Question;
    value = '';

    update(value: string) {
      this.value = value;
      this.question.solution = value;
    }
  }
