import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetInfoService } from '../../../services/get-info.service';

import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

import { LibraryBranch } from '../../../models/library-branch';

@Component({
    selector: 'app-dashboard-home',
    templateUrl: './dashboard-home.component.html',
    styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit {
    libraries: LibraryBranch[] = [];
    constructor(
        private router: Router,
        private getInfo: GetInfoService,
        private iconRegistry: MatIconRegistry,
        private sanitizer: DomSanitizer) {
        iconRegistry
            .addSvgIcon('delete',
                sanitizer.bypassSecurityTrustResourceUrl('assets/img/garbage.svg'))
            .addSvgIcon('edit',
                sanitizer.bypassSecurityTrustResourceUrl('assets/img/edit-pencil.svg'))
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
}