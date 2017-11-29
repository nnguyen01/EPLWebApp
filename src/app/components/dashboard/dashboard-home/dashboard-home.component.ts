import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { GetInfoService } from '../../../services/get-info.service';

import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

import { LibraryBranch } from '../../../models/library-branch';
import { EditBranchDialogComponent } from '../../dialogs/edit-branch-dialog/edit-branch-dialog.component'
import { DeleteBranchDialogComponent } from '../../dialogs/delete-branch-dialog/delete-branch-dialog.component';

@Component({
    selector: 'app-dashboard-home',
    templateUrl: './dashboard-home.component.html',
    styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit {
    libraries: LibraryBranch[] = [];
    branchLink: boolean = true;

    constructor(
        private router: Router,
        private getInfo: GetInfoService,
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
            .then((library => {
                if (library.status === 'success') {
                    this.libraries = library.data;
                }
            }
            )
            )
            .catch((err => {
                console.log(err);
            }
            )
            )
    }

    openEditDialog(library: LibraryBranch): void {
        this.branchLink = false;
        let dialogRef = this.dialog.open(EditBranchDialogComponent, {
            width: '400px',
            data: { 
                branch: library.branch,
                iLink: library.iLink
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            this.branchLink = true;
            console.log('The dialog was closed');
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
            this.branchLink = true;
            console.log('The dialog was closed');
        });
    }
}