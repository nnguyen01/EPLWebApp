import { Component, OnInit, Input, HostBinding, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { GetInfoService } from '../../../services/get-info.service';
import { Zone } from '../../../models/zone';
import { Question } from '../../../models/question';
import { slideInDownAnimation } from '../../../animations';
import { MatTabChangeEvent } from '@angular/material';

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
    questions: Question[] = [];
    loaded: boolean = false; // Loads the questions once true

    selectedTab: number = 0;
    tabChanged = (tabChangeEvent: MatTabChangeEvent): void => {
        this.loaded = false;
        this.selectedTab = tabChangeEvent.index;
        if (this.zones != null) {
            this.questionDisplay(this.branchName, this.zones[this.selectedTab].zone);
        }
    }

    constructor(
        private route: ActivatedRoute,
        private getInfo: GetInfoService,
        private changeDetect: ChangeDetectorRef) { }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.branchName = params['branch'];
        })
        // TODO: Unsubscribe
        this.route.data
            .subscribe((data) => {
                this.zones = data.zone.data;
                if (this.zones.length !== 0) {
                    for (let entry of this.zones) {
                        entry.zone = entry.zone.replace(/_/g, " ");
                    }
                }
            });

        if (this.zones.length !== 0) {
            console.log(this.zones);
            this.questionDisplay(this.branchName, this.zones[this.selectedTab].zone);
        }
    }

    questionDisplay(branch: string, zone: string): void {
        zone = zone.replace(/\s/g, "_");
        this.getInfo.getQuestions(branch, zone)
            .then((question) => {
                if (question.status === 'success') {
                    this.questions = question.data;
                    this.loaded = true;
                    this.changeDetect.markForCheck();
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }
}
