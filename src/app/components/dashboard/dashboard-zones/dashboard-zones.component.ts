import { Component, OnInit, Input, HostBinding, ChangeDetectionStrategy } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { GetInfoService } from '../../../services/get-info.service';
import { Zone } from '../../../models/zone';
import { slideInDownAnimation } from '../../../animations';

@Component({
    moduleId: module.id,
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-dashboard-zones',
    templateUrl: './dashboard-zones.component.html',
    styleUrls: ['./dashboard-zones.component.css'],
    animations: [slideInDownAnimation]
})
export class DashboardZonesComponent implements OnInit {
    @HostBinding('@routeAnimation') routeAnimation = true;
    @HostBinding('style.display') display = 'block';
    @HostBinding('style.position') position = 'relative';

    branchName: string;
    zones: Zone[] = [];

    constructor(
        private route: ActivatedRoute,
        private getInfo: GetInfoService) { }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.branchName = params['branch'];
        })

        this.route.data
            .subscribe((data) => {
                this.zones = data.zone.data;
                for (let entry of this.zones) {
                    entry.zone = entry.zone.replace(/_/g, " ");
                }
                console.log(this.zones);
            });
    }
}
