import { Component, Input } from '@angular/core';
import { Question } from './question';
// TODO: get zone from database so we can
// allow user to select from list instead of
// text input

@Component({
    selector: 'zone-selector',
    template: `
    <h4> Enter the Zone this question belongs to</h4>

    <input #box
    (keyup.enter)="update(box.value)"
    (blur)="update(box.value)">

    <p>{{value}}</p>
    `
  })
  export class ZoneSelector {
    @Input() question: Question;
    value = '';

    update(value: string) {
      this.value = value;
      this.question.zone = value;
    }
  }