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

    //branch: FormControl;
    library: LibraryBranch;
    oldLibrary: LibraryBranch;

    constructor( @Inject(MAT_DIALOG_DATA) public data: any,
        private iconRegistry: MatIconRegistry,
        private dialogRef: MatDialogRef<EditBranchDialogComponent>,
        private sanitizer: DomSanitizer) {
        iconRegistry
            .addSvgIcon('edit',
            sanitizer.bypassSecurityTrustResourceUrl('assets/img/edit-pencil.svg'));
            this.oldLibrary = JSON.parse(JSON.stringify(data.library)); // Hacky method to not have the same reference
            this.library = JSON.parse(JSON.stringify(data.library));
        //this.branch = new FormControl(library.branch, [Validators.required, Validators.pattern(library.branch)])
    }

    /*
    getErrorMessage() {
        return this.branch.hasError('required') ? 'You must enter a name' :
            this.branch.dirty ? 'Editing a branch name edits its questions and zones' :
                '';
    } */

    submit() {
        this.dialogRef.close({ update: true, new: this.library, old: this.oldLibrary });
    }

    cancel() {
        this.dialogRef.close({ update: false });
    }
}