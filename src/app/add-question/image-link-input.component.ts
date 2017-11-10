import { Component, Input } from '@angular/core';
import { Question } from './question';
@Component({
    selector: 'image-link-input',
    template: `
    <h4>Enter an image URL that the question will display</h4>

    <input #box
    (keyup.enter)="update(box.value)"
    (blur)="update(box.value)">

    <p>{{value}}</p>
    `
  })
  export class ImageLinkInput {
    @Input() question: Question;
    value = '';

    update(value: string) {
      this.value = value;
      this.question.iLink = value;
    }
  }