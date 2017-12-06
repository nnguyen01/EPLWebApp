/**
	Home

	Handles library branch information on the home page
		- Retrieves all libraies/ branches from database
		- Add, Delete and Update branches
*/

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
    filteredLibraries: LibraryBranch[] = [];
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

    /** Gets branch information from database **/
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

    /** Get beanches and sort in alphabetical order **/
    ngAfterContentInit() {
        this.subscription = this.dataService.dialogSource$.subscribe(
            newLibrary => {
                this.libraries.push(newLibrary);
                // Sort libaries to alphabetical order
                this.libraries.sort((a, b) => a.branch.localeCompare(b.branch));
            }
        )
    }

    assignCopy() {
        this.filteredLibraries = Object.assign([], this.libraries);
    }
    
    filterItem(value) {
        if (!value) this.assignCopy(); //when nothing has typed
        this.filteredLibraries = Object.assign([], this.libraries).filter(
            item => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1
        )
        this.assignCopy();
    }

    /** 
        Display a popup window to allow user to edit tht branch.
        User can edit the branch name and the image link associated with that branch
    **/
    openEditDialog(library: LibraryBranch): void {
        this.branchLink = false;
        let dialogRef = this.dialog.open(EditBranchDialogComponent, {
            width: '400px',
            data: library
        });

        /* Update the branch info */
        dialogRef.afterClosed().subscribe(result => {
            this.branchLink = true;
            if (result && (result.update === true)) {
                let index = this.libraries.findIndex(lib => lib.branch === result.old.branch);
                this.libraries[index] = result.new; // Replaces object 
            }
        });
    }

    /** 
        Display a popup window to confirm deletion of branch.
        If confirmed (User click Yes), delete the branch.
    **/
    openDeleteDialog(library: LibraryBranch): void {
        this.branchLink = false;
        let dialogRef = this.dialog.open(DeleteBranchDialogComponent, {
            width: '250px',
            data: {
                branch: library.branch
            }
        });

        /* Delete branch if user confirms (selects Yes) */
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

    /** Prevent memory leak when component destroyed **/
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}