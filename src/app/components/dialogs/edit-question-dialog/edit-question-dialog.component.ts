import { Component, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

import { DeleteInfoService } from '../../../services/delete-info.service';
import { EditInfoService } from '../../../services/edit-info.service';

import { Question } from '../../../models/question';

@Component({
    selector: 'app-edit-question-dialog',
    templateUrl: './edit-question-dialog.component.html',
    styleUrls: ['./edit-question-dialog.component.css']
})
export class EditQuestionDialogComponent {

    input: FormControl;
    question: Question;
    originalQuestion: Question;

    constructor( @Inject(MAT_DIALOG_DATA) public data: any,
        private iconRegistry: MatIconRegistry,
        private dialogRef: MatDialogRef<EditQuestionDialogComponent>,
        private editInfo: EditInfoService,
        private deleteInfo: DeleteInfoService,
        private sanitizer: DomSanitizer) {
        iconRegistry
            .addSvgIcon('edit',
            sanitizer.bypassSecurityTrustResourceUrl('assets/img/edit-pencil.svg'))
            .addSvgIcon('delete',
            sanitizer.bypassSecurityTrustResourceUrl('assets/img/garbage.svg'));
        this.question = JSON.parse(JSON.stringify(data.question));
        this.originalQuestion = JSON.parse(JSON.stringify(data.question)); // Hacky method to not have the same reference
        this.input = new FormControl(this.question.Prompt,
            [
                Validators.required,
                Validators.pattern(this.question.Prompt)
            ])
    }

    /*
    getErrorMessage() {
        return this.branch.hasError('required') ? 'You must enter a name' :
            this.branch.dirty ? 'Editing a branch name edits its questions and zones' :
                '';
    }
    */

    submit() {
        // Pass the old question to update the view
        if (this.question.qType !== 'multChoice') {
            this.question.Choices = '';
        }
        this.editInfo.editQuestion(this.question)
            .then((result) => {
                if (result.status === 'success') {
                    console.log("success");
                }
            })
            .catch((err) => {
                console.log(err);
            })
        this.dialogRef.close({ update: true, new: this.question, old: this.originalQuestion });
    }

    cancel() {
        this.dialogRef.close({ update: false });
    }

    delete() {
        this.deleteInfo.deleteQuestion(this.question.id)
            .then(result => {
                if (result.status === 'success') {
                    console.log(result);
                }
            })
            .catch(err => {
                console.log(err);
            })
        this.dialogRef.close({ delete: true, old: this.originalQuestion });
    }
}