import { Component, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LibraryBranch } from '../../../models/library-branch';

import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

@Component({
    selector: 'app-edit-branch-dialog',
    templateUrl: './edit-branch-dialog.component.html',
    styleUrls: ['./edit-branch-dialog.component.css']
})
export class EditBranchDialogComponent {

    placeHolder: string;
    branch: FormControl;

    constructor(public dialogRef: MatDialogRef<any>,
        @Inject(MAT_DIALOG_DATA) public library: LibraryBranch,
        private iconRegistry: MatIconRegistry,
        private sanitizer: DomSanitizer) {
        iconRegistry
            .addSvgIcon('edit',
            sanitizer.bypassSecurityTrustResourceUrl('assets/img/edit-pencil.svg'));
            this.branch = new FormControl('', [Validators.required, Validators.pattern(library.branch)])
    }

    getErrorMessage() {
        return (this.branch.hasError('required') && this.branch.touched) ? 'You must enter a name' :
        (this.branch.dirty && this.branch.touched) ? 'Editing a branch name edits its questions and zones' :
            '';
  }
}
