import { Component, Input } from '@angular/core';
import { Question } from './question';

@Component({
    selector: 'branch-selector',
    templateUrl: './add-question.component.html',    
    template: `
    <h4>Select the branch</h4>

    <div *ngFor="let branch of branches">
        <!-- create a radio button-->
        <input
        type="radio"
        name="branchChoices"
        value="{{branch}}"
        (change)="radioChangeHandler($event)">
        <i>{{branch}}</i>
    </div>

    <div *ngIf="edited" class="alert alert-success box-msg" role="alert">
    <strong>List Saved!</strong> Your changes has been saved.
</div>

<!-- the radio button change will be reflected below -->
<p><span>You selected: </span><b>{{selectedBranch}}</b></p>
    `
})

export class BranchSelector {
    selectedBranch: string = '';
    @Input() question: Question;    
    branches = [
      'Clareview'
    ];
    // event handler for the radio button's change event
    radioChangeHandler (event: any) {
      // update the ui
      this.selectedBranch = event.target.value;
      this.question.branch = this.selectedBranch;
    }
}
