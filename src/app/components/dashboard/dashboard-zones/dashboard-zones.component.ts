import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { DashboardInfoService } from '../../../services/dashboard-info.service';

import { LibraryBranch } from '../../../models/library-branch';



@Component({
    selector: 'app-dashboard-zones',
    templateUrl: './dashboard-zones.component.html',
    styleUrls: ['./dashboard-zones.component.css']
})
export class DashboardZonesComponent implements OnInit {
    @Input() sick: string;
    library : LibraryBranch;

    constructor(private dashService: DashboardInfoService) { 
        console.log(this.sick);
        dashService.branch$.subscribe(
            libraryName => {
                console.log("hello1");
                console.log(libraryName);
                console.log("hello2");
            }
        )
    }
    ngOnInit(): void {
    }

}
