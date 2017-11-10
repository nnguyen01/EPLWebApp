import { Component, Input } from '@angular/core';
import { Question } from './question';

@Component({
    selector: 'prompt-input',
    template: `
    <h4>Enter the question prompt</h4>

    <input #box
    (keyup.enter)="update(box.value)"
    (blur)="update(box.value)">

    <p>{{value}}</p>
    `
  })

  export class PromptInput {
    @Input() question: Question;
    value = '';
    
    update(value: string) { 
      this.value = value;
      this.question.prompt = value;
    }
  }