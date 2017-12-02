/**
	Creates new question
*/
import { Component, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Question } from '../../../models/question';
import { CreateInfoService } from '../../../services/create-info.service';

@Component({
    selector: 'app-create-question-dialog',
    templateUrl: './create-question-dialog.component.html',
    styleUrls: ['./create-question-dialog.component.css']
})
export class CreateQuestionDialogComponent {

    question: Question = {};

    constructor(@Inject(MAT_DIALOG_DATA) public data: any,
        public dialogRef: MatDialogRef<CreateQuestionDialogComponent>,
        private createInfo: CreateInfoService) {
        this.question.branch = data.branch;
        this.question.zone = data.zone;
    }

    create(): void {
        this.question.zone = this.question.zone.replace(/\s/g, "_");
        this.createInfo.createQuestion(this.question.Prompt, this.question.Choices, this.question.Solution,
            this.question.zone, this.question.branch, this.question.qType, this.question.iLink,
            this.question.sLink, this.question.blanks)
            .then(result => {
                if (result === 'success') {
                    console.log(result);
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    cancel(): void {
        this.dialogRef.close();
    }
}