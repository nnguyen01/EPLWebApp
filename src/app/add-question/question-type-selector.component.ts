import { Component, Input } from '@angular/core';
import { Question } from './question';

@Component({
    selector: 'question-type-selector',
    templateUrl: './add-question.component.html',    
    template: `
    <h4>Select the type of question</h4>

    <div *ngFor="let questionType of questionTypes">
        <!-- create a radio button-->
        <input
        type="radio"
        name="questionChoices"
        value="{{questionType}}"
        (change)="radioChangeHandler($event)">
        <i>{{questionType}}</i>
    </div>

<!-- the radio button change will be reflected below -->
<p><span>You selected: </span><b>{{selectedDay}}</b></p>
    `
})
export class QuestionTypeSelector {
    selectedDay: string = '';
    @Input() question: Question;    
    
    questionTypes = [
      'picInput',
      'writInput',
      'multChoice',
    ];
  
    //event handler for the radio button's change event
    radioChangeHandler (event: any) {
      //update the ui
      this.selectedDay = event.target.value;
      this.question.qType = this.selectedDay;
    }
}
