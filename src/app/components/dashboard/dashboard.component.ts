import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { AuthService } from '../../services/auth.service';
import { DataService } from '../../services/data.service';
import { slideInDownAnimation } from '../../animations';

import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

import { MatRipple } from '@angular/material';
import { LibraryBranch } from '../../models/library-branch';
import { CreateBranchDialogComponent } from '../dialogs/create-branch-dialog/create-branch-dialog.component';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
    @ViewChild(MatRipple) ripple: MatRipple;

    library: LibraryBranch;

    constructor(
        private router: Router,
        private auth: AuthService,
        public dialog: MatDialog,
        private dataService: DataService,
        private iconRegistry: MatIconRegistry,
        private sanitizer: DomSanitizer) {
        iconRegistry
            .addSvgIcon('dashboard',
            sanitizer.bypassSecurityTrustResourceUrl('assets/img/dashboard.svg'))
            .addSvgIcon('add',
            sanitizer.bypassSecurityTrustResourceUrl('assets/img/add.svg'));
    }

    ngOnInit(): void {
        const token = localStorage.getItem('token');
        if (token) {
            this.auth.ensureAuthenticated(token)
                .then((user) => {
                    console.log(user);
                    if (user.status === 'success') {
                        this.router.navigateByUrl('/dashboard/home');
                    }
                })
                .catch((err) => {
                    alert("Please Login Again")
                    localStorage.removeItem('token')
                    this.router.navigateByUrl('/login');
                })
        }
    }


    onLogout(): void {
        const token = localStorage.getItem('token');
        if (token) {
            this.auth.logout(token)
                .then((user) => { // TODO: Catch error and do something (not sure what)
                    if (user.status === 'success') {
                        localStorage.removeItem('token');
                        this.router.navigateByUrl('/login');
                    }
                }
                )
        } else {
            this.router.navigateByUrl('/login');
        }
    }

    openCreateDialog(): void {
        let dialogRef = this.dialog.open(CreateBranchDialogComponent, {
            width: '400px'
        });

        dialogRef.afterClosed().subscribe(result => {
            // Use juggling check for null and defined instead of '!=='
            if (result != null) {
                this.dataService.submitBranch(result);
            }
            console.log('The dialog was closed');
        });
    }
}