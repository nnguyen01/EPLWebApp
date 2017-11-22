import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { GetInfoService } from '../../../services/get-info.service';

import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

import { LibraryBranch } from '../../../models/library-branch';

@Component({
    selector: 'app-dashboard-home',
    templateUrl: './dashboard-home.component.html',
    styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit {
    library: LibraryBranch = { branch: "", iLink: "" }
    libraries : LibraryBranch[] = [];
    constructor(private getInfo: GetInfoService, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) { 
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
                    this.library = library.data[0];
                    console.log(this.library.branch);
                    console.log(this.libraries);
                    //console.log(this.library.branch);
                    //console.log(this.library.iLink);
                }
            }
        )
            .catch((err) => {
                console.log(err);
            }
        )
    }
}