import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { GetInfoService } from '../../../services/get-info.service';
import { Zone } from '../../../models/zone';



@Component({
    selector: 'app-dashboard-zones',
    templateUrl: './dashboard-zones.component.html',
    styleUrls: ['./dashboard-zones.component.css']
})
export class DashboardZonesComponent implements OnInit {
    branchName: string;
    zones: Zone[] = [];

    constructor(
        private route: ActivatedRoute,
        private getInfo: GetInfoService) { }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.branchName = params['zone'];
        })
        console.log(this.branchName);

        this.getInfo.getZones(this.branchName)
            .then((zones => {
                console.log(zones);
                if (zones.status === 'success') {
                    this.zones = zones.data;
                }
            }
            )
            )
            .catch((err => {
                console.log(err);
            }
            )
            )
        console.log(this.zones);
    }
}
