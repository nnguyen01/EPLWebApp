import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LibraryBranch } from '../../../models/library-branch';

@Component({
    selector: 'app-delete-branch-dialog',
    templateUrl: './delete-branch-dialog.component.html',
    styleUrls: ['./delete-branch-dialog.component.css']
})
export class DeleteBranchDialogComponent {

    constructor(@Inject(MAT_DIALOG_DATA) public library: LibraryBranch) {
    }
}
