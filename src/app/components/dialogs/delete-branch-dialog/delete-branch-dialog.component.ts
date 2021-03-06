/**
	Deletes branch
*/
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LibraryBranch } from '../../../models/library-branch';
import { DeleteInfoService } from '../../../services/delete-info.service';

@Component({
    selector: 'app-delete-branch-dialog',
    templateUrl: './delete-branch-dialog.component.html',
    styleUrls: ['./delete-branch-dialog.component.css']
})
export class DeleteBranchDialogComponent {

    constructor( @Inject(MAT_DIALOG_DATA) public library: LibraryBranch,
        private dialogRef: MatDialogRef<DeleteBranchDialogComponent>,
        private deleteInfo: DeleteInfoService) {
    }

    cancel() {
        this.dialogRef.close(false);
    }

    delete() {
        this.deleteInfo.deleteBranch(this.library.branch)
            .then(result => {
                if (result.status === 'success') {
                    console.log(result);
                }
            })
            .catch(err => {
                console.log(err);
            })
        this.dialogRef.close(true);
    }
}
