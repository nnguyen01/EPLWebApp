import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'app-edit-branch-dialog',
    templateUrl: './edit-branch-dialog.component.html',
    styleUrls: ['./edit-branch-dialog.component.css']
})
export class EditBranchDialogComponent{

    constructor(public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    onClick() {
        this.dialogRef.close();
    }
}
