import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { GetInfoService } from '../../../services/get-info.service';
import { DashboardInfoService } from '../../../services/dashboard-info.service';

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
        private getInfo: GetInfoService,
        private iconRegistry: MatIconRegistry,
        private sanitizer: DomSanitizer,
        private dashService: DashboardInfoService) {
        iconRegistry.addSvgIcon(
            'settings',
            sanitizer.bypassSecurityTrustResourceUrl('assets/img/settings.svg'));
    }
    ngOnInit(): void {
        this.getInfo.getBranch()
            .then((library) => {
                console.log(library)
                if (library.status === 'success') {
                    this.libraries = library.data;
                }
            }
            )
            .catch((err) => {
                console.log(err);
            }
            )
    }
    onClick(name: string): void {
        this.dashService.getBranch(name);
    }
}