import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { LibraryBranch } from '../../../models/library-branch';
import { ActivatedRoute } from '@angular/router';



@Component({
    selector: 'app-dashboard-zones',
    templateUrl: './dashboard-zones.component.html',
    styleUrls: ['./dashboard-zones.component.css']
})
export class DashboardZonesComponent implements OnInit {
    library: LibraryBranch;

    constructor(
        private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.library = params['zone'];
        })
        console.log(this.library);
    }
}
