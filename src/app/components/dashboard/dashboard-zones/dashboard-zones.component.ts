import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { GetInfoService } from '../../../services/get-info.service';
import { Zone } from '../../../models/zone';
import { slideInDownAnimation } from '../../../animations';

@Component({
    selector: 'app-dashboard-zones',
    templateUrl: './dashboard-zones.component.html',
    styleUrls: ['./dashboard-zones.component.css'],
    animations: [ slideInDownAnimation ]
})
export class DashboardZonesComponent implements OnInit {
    @HostBinding('@routeAnimation') routeAnimation = true;
    @HostBinding('style.display')   display = 'block';
    @HostBinding('style.position')  position = 'absolute';

    branchName: string;
    zones: Zone[] = [];

    constructor(
        private route: ActivatedRoute,
        private getInfo: GetInfoService) { }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.branchName = params['zone'];
        })

        this.getInfo.getZones(this.branchName)
            .then((zones => {
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
    }
}
