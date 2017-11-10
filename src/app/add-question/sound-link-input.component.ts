import { Component, Input } from '@angular/core';
import { Question } from './question';

@Component({
    selector: 'sound-link-input',
    template: `
    <h4>Enter a sound URL that the question will display (OPTIONAL)</h4>

    <input #box
    (keyup.enter)="update(box.value)"
    (blur)="update(box.value)">

    <p>{{value}}</p>
    `
  })
  export class SoundLinkInput {
    @Input() question: Question;
    value = '';

    update(value: string) {
      this.value = value;
      this.question.sLink = value;
    }
  }