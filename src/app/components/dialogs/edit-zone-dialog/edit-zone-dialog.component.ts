import { Component, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Zone } from '../../../models/zone';

import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { DeleteInfoService } from '../../../services/delete-info.service';
import { EditInfoService } from '../../../services/edit-info.service';

@Component({
    selector: 'app-edit-zone-dialog',
    templateUrl: './edit-zone-dialog.component.html',
    styleUrls: ['./edit-zone-dialog.component.css']
})
export class EditZoneDialogComponent {

    zone: Zone;
    originalZone: Zone;

    constructor( @Inject(MAT_DIALOG_DATA) public data: any,
        private dialogRef: MatDialogRef<EditZoneDialogComponent>,
        private deleteInfo: DeleteInfoService,
        private editInfo: EditInfoService,
        private iconRegistry: MatIconRegistry,
        private sanitizer: DomSanitizer) {
        iconRegistry
            .addSvgIcon('edit',
            sanitizer.bypassSecurityTrustResourceUrl('assets/img/edit-pencil.svg'))
            .addSvgIcon('delete',
            sanitizer.bypassSecurityTrustResourceUrl('assets/img/garbage.svg'));

        this.zone = JSON.parse(JSON.stringify(data.zone));
        this.originalZone = JSON.parse(JSON.stringify(data.zone));
    }

    submit() {
        this.editInfo.editZone(this.zone.beaconID, this.originalZone.zone, this.zone.zone, this.originalZone.branch,
            this.zone.branch, this.zone.category, this.zone.color)
            .then((result) => {
                if (result.status === 'success') {
                    console.log("success");
                }
            })
            .catch((err) => {
                console.log(err);
            })
        this.dialogRef.close({ update: true, new: this.zone, old: this.originalZone });
    }

    cancel() {
        this.dialogRef.close({ update: false });
    }

    delete() {
        this.deleteInfo.deleteZone(this.zone.zone, this.zone.branch)
            .then(result => {
                if (result.status === 'success') {
                    console.log(result);
                }
            })
            .catch(err => {
                console.log(err);
            })
        this.dialogRef.close({ delete: true, old: this.originalZone });
    }
}
