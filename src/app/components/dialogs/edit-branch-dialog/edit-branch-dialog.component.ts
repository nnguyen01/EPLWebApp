/**
	Edits branch
*/
import { Component, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatIconRegistry, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { EditInfoService } from '../../../services/edit-info.service';

import { LibraryBranch } from '../../../models/library-branch';

@Component({
    selector: 'app-edit-branch-dialog',
    templateUrl: './edit-branch-dialog.component.html',
    styleUrls: ['./edit-branch-dialog.component.css']
})
export class EditBranchDialogComponent {

    branch: FormControl;
    library: LibraryBranch;
    oldLibrary: LibraryBranch;

    constructor( @Inject(MAT_DIALOG_DATA) public data: LibraryBranch,
        private iconRegistry: MatIconRegistry,
        private dialogRef: MatDialogRef<EditBranchDialogComponent>,
        private editInfo: EditInfoService,
        private sanitizer: DomSanitizer) {
        iconRegistry
            .addSvgIcon('edit',
            sanitizer.bypassSecurityTrustResourceUrl('assets/img/edit-pencil.svg'));
        this.oldLibrary = JSON.parse(JSON.stringify(data)); // Hacky method to not have the same reference
        this.library = JSON.parse(JSON.stringify(data));
        this.branch = new FormControl(this.library.branch, [Validators.required, Validators.pattern(this.library.branch)])
    }


    getErrorMessage() {
        return this.branch.hasError('required') ? 'You must enter a name' :
            this.branch.dirty ? 'Editing a branch name edits its questions and zones' :
                '';
    }

    submit() {
        this.editInfo.editBranch(this.oldLibrary.branch, this.library.branch, this.library.iLink)
            .then((result) => {
                if (result.status === 'success') {
                    console.log(result);
                }
            })
            .catch((err) => {
                console.log(err);
            })
        this.dialogRef.close({ update: true, new: this.library, old: this.oldLibrary });
    }

    cancel() {
        this.dialogRef.close({ update: false });
    }
}