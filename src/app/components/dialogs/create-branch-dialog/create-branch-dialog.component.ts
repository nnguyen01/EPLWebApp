import { Component, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LibraryBranch } from '../../../models/library-branch';

@Component({
    selector: 'app-create-branch-dialog',
    templateUrl: './create-branch-dialog.component.html',
    styleUrls: ['./create-branch-dialog.component.css']
})
export class CreateBranchDialogComponent {

    branch: FormControl;
    library: LibraryBranch = {};

    constructor() {
        this.branch = new FormControl("", [Validators.required]);
    }

    getErrorMessage() {
        return this.branch.hasError('required') ? 'You must enter a name' : '';
    }
}