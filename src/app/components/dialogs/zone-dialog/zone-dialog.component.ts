import { Component, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Zone } from '../../../models/zone';

import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { DeleteInfoService } from '../../../services/delete-info.service';

@Component({
    selector: 'app-zone-dialog',
    templateUrl: './zone-dialog.component.html',
    styleUrls: ['./zone-dialog.component.css']
})
export class ZoneDialogComponent {

    //branch: FormControl;
    zone: Zone;
    originalZone: Zone;

    constructor( @Inject(MAT_DIALOG_DATA) public data: any,
        private dialogRef: MatDialogRef<ZoneDialogComponent>,
        private deleteInfo: DeleteInfoService,
        private iconRegistry: MatIconRegistry,
        private sanitizer: DomSanitizer) {
        iconRegistry
            .addSvgIcon('edit',
            sanitizer.bypassSecurityTrustResourceUrl('assets/img/edit-pencil.svg'))
            .addSvgIcon('delete',
            sanitizer.bypassSecurityTrustResourceUrl('assets/img/garbage.svg'));
        this.zone = JSON.parse(JSON.stringify(data.zone));
        this.originalZone = JSON.parse(JSON.stringify(data.zone)); // Hacky method to not have the same reference
        //this.branch = new FormControl(library.branch, [Validators.required, Validators.pattern(library.branch)])
    }

    /*
    getErrorMessage() {
        return this.branch.hasError('required') ? 'You must enter a name' :
            this.branch.dirty ? 'Editing a branch name edits its questions and zones' :
                '';
    }
    */

    submit() {
        this.dialogRef.close({ update: true, new: this.zone, old: this.originalZone });
    }

    cancel() {
        this.dialogRef.close({ update: false });
    }

    delete() {
        this.deleteInfo.deleteZone(this.zone.branch, this.zone.zone)
            .then(result => {
                if (result.status === 'success') {
                    console.log(result);
                }
            })
            .catch(err => {
                console.log(err);
            })
        this.dialogRef.close({ delete: true, old: this.originalZone});
    }
}
