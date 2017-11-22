import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { GetInfoService } from '../../../services/get-info.service';

import { LibraryBranch } from '../../../models/library-branch';

@Component({
    selector: 'app-dashboard-home',
    templateUrl: './dashboard-home.component.html',
    styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit {
    library: LibraryBranch = { branch: "", iLink: "" }
    constructor(private getInfo: GetInfoService) { }
    ngOnInit(): void {
        this.getInfo.getBranch()
            .then((library) => {
                console.log(library)
                if (library.status === 'success') {
                    this.library = library.data[0];
                    console.log(this.library.branch);
                }
            }
        )
            .catch((err) => {
                console.log(err);
            }
        )
    }
}