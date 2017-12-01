import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog, MatIconRegistry } from '@angular/material';
import { Subscription } from 'rxjs/Subscription';

import { DataService } from '../../../services/data.service';
import { GetInfoService } from '../../../services/get-info.service';

import { LibraryBranch } from '../../../models/library-branch';
import { EditBranchDialogComponent } from '../../dialogs/edit-branch-dialog/edit-branch-dialog.component'
import { DeleteBranchDialogComponent } from '../../dialogs/delete-branch-dialog/delete-branch-dialog.component';
import { ChangeDetectorRef } from '@angular/core/src/change_detection/change_detector_ref';
import { EditInfoService } from '../../../services/edit-info.service';

@Component({
    selector: 'app-dashboard-home',
    templateUrl: './dashboard-home.component.html',
    styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit {

    libraries: LibraryBranch[] = [];
    branchLink: boolean = true; // Used to dynamically set the routerLink
    subscription: Subscription;

    constructor(
        private router: Router,
        public dataService: DataService,
        private getInfo: GetInfoService,
        private editInfo: EditInfoService,
        public dialog: MatDialog,
        private iconRegistry: MatIconRegistry,
        private sanitizer: DomSanitizer) {
        iconRegistry
            .addSvgIcon('delete',
            sanitizer.bypassSecurityTrustResourceUrl('assets/img/garbage.svg'))
            .addSvgIcon('edit',
            sanitizer.bypassSecurityTrustResourceUrl('assets/img/edit-pencil.svg'));
    }

    ngOnInit(): void {
        this.getInfo.getBranch()
            .then(library => {
                if (library.status === 'success') {
                    this.libraries = library.data;
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    ngAfterContentInit() {
        this.subscription = this.dataService.dialogSource$.subscribe(
            newLibrary => {
                this.libraries.push(newLibrary);
                // Sort libaries to alphabetical order
                this.libraries.sort((a, b) => a.branch.localeCompare(b.branch));
            }
        )
    }

    openEditDialog(library: LibraryBranch): void {
        this.branchLink = false;
        let dialogRef = this.dialog.open(EditBranchDialogComponent, {
            width: '400px',
            data: {
                data: library
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            this.branchLink = true;
            /*
            if (result && (result.update === true)) {
                let index = this.libraries.findIndex(zone => zone.zone === result.old.zone);
                this.libraries[index] = result.new; // Replaces object
                let update = JSON.parse(JSON.stringify(result.new)); // Erases the reference
                this.editInfo.editBranch(update.beaconID, result.old.zone, )
                    .then((result) => {
                        if (result.status === 'success') {
                            console.log("success");
                            this.changeDetect.markForCheck();
                        }
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            }
            */
        });
    }

    openDeleteDialog(library: LibraryBranch): void {
        this.branchLink = false;
        let dialogRef = this.dialog.open(DeleteBranchDialogComponent, {
            width: '250px',
            data: {
                branch: library.branch
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result == true) {
                const index: number = this.libraries.indexOf(library);
                if (index !== -1) {
                    this.libraries.splice(index, 1);
                }
            }
            this.branchLink = true;
        });
    }

    ngOnDestroy() {
        // Prevent memory leak when component destroyed
        this.subscription.unsubscribe();
    }
}