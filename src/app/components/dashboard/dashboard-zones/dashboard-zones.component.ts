import { Component, OnInit, Input, HostBinding, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { MatTabChangeEvent, MatTableDataSource, MatDialog } from '@angular/material';
import { slideInDownAnimation } from '../../../animations';

import { EditQuestionDialogComponent } from '../../dialogs/edit-question-dialog/edit-question-dialog.component';

import { GetInfoService } from '../../../services/get-info.service';

import { Zone } from '../../../models/zone';
import { Question } from '../../../models/question';

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
    selectedRowIndex: number = -1;

    displayedColumns = ['Prompt', 'Choices', 'Solution', 'Type'];
    dataSource: MatTableDataSource<Question>;

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
        private changeDetect: ChangeDetectorRef,
        private getInfo: GetInfoService,
        public dialog: MatDialog) { }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.branchName = params['branch'];
        })

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
                    /*
                    for (let entry of this.questions) {
                        if (entry.Choices !== null) {
                            entry.Choices = entry.Choices.replace(/[|_|]/g, "/");
                        }
                    */
                    this.loaded = true;
                    this.dataSource = new MatTableDataSource<Question>(this.questions);
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    openEditQuestionDialog(question: Question): void {
        let dialogRef = this.dialog.open(EditQuestionDialogComponent, {
            width: '700px',
            data: {
                question: question
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log(result);
            console.log("closed");
        });
    }
    
    highlight(row){
        this.selectedRowIndex = row.id;
    }

    normallight(row) {
        this.selectedRowIndex = -1;
    }
}
