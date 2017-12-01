import { Component, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LibraryBranch } from '../../../models/library-branch';
import { CreateInfoService } from '../../../services/create-info.service';

@Component({
    selector: 'app-create-branch-dialog',
    templateUrl: './create-branch-dialog.component.html',
    styleUrls: ['./create-branch-dialog.component.css']
})
export class CreateBranchDialogComponent {

    branch: FormControl;
    library: LibraryBranch = {};

    constructor(
        public dialogRef: MatDialogRef<CreateBranchDialogComponent>,
        private createInfo: CreateInfoService) {
        this.branch = new FormControl("", [Validators.required]);
    }

    getErrorMessage() {
        return this.branch.hasError('required') ? 'You must enter a name' : '';
    }

    create(): void {
        this.createInfo.createBranch(this.library.branch, this.library.iLink)
        .then(result => {
            if (result === 'success'){
                console.log(result);
            }
        })
        .catch(err => {
            console.log(err);
        })
    }

    cancel(): void {
        this.dialogRef.close();
    }
}