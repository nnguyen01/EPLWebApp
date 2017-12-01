import { Component, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


import { CreateInfoService } from '../../../services/create-info.service';

import { Zone } from '../../../models/zone';

@Component({
  selector: 'app-create-zone-dialog',
  templateUrl: './create-zone-dialog.component.html',
  styleUrls: ['./create-zone-dialog.component.css']
})
export class CreateZoneDialogComponent {

    branch: FormControl;
    zone: Zone = {};

    constructor(@Inject(MAT_DIALOG_DATA) public data: any,
        public dialogRef: MatDialogRef<CreateZoneDialogComponent>,
        private createInfo: CreateInfoService) {
            this.zone.branch = data.data;
        //this.branch = new FormControl("", [Validators.required]);
    }

    getErrorMessage() {
        return this.branch.hasError('required') ? 'You must enter a name' : '';
    }

    create(): void {
        this.createInfo.createZone(this.zone.beaconID, this.zone.zone, this.zone.branch,
        this.zone.category, this.zone.color)
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
