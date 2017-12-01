import { Component, OnInit, Input, HostBinding, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { MatTabChangeEvent, MatTableDataSource, MatDialog, MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { slideInDownAnimation } from '../../../animations';

import { CreateQuestionDialogComponent } from '../../dialogs/create-question-dialog/create-question-dialog.component';
import { EditQuestionDialogComponent } from '../../dialogs/edit-question-dialog/edit-question-dialog.component';
import { ZoneDialogComponent } from '../../dialogs/zone-dialog/zone-dialog.component';

import { GetInfoService } from '../../../services/get-info.service';
import { EditInfoService } from '../../../services/edit-info.service';

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
    empty: boolean = false; // Shows empty message
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
        private editInfo: EditInfoService,
        private getInfo: GetInfoService,
        public dialog: MatDialog,
        private iconRegistry: MatIconRegistry,
        private sanitizer: DomSanitizer) {
        iconRegistry
            .addSvgIcon('add',
            sanitizer.bypassSecurityTrustResourceUrl('assets/img/add.svg'));
    }

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
            this.questionDisplay(this.branchName, this.zones[this.selectedTab].zone);
        }
    }

    highlight(row) {
        this.selectedRowIndex = row.id;
    }

    normallight(row) {
        this.selectedRowIndex = -1;
    }

    questionDisplay(branch: string, zone: string): void {
        zone = zone.replace(/\s/g, "_"); // Revert only for query
        this.getInfo.getQuestions(branch, zone)
            .then((question) => {
                if (question.status === 'success') {
                    this.questions = question.data;
                    for (let entry of this.questions) {
                        entry.zone = entry.zone.replace(/_/g, " ");
                        if (entry.Choices !== null) {
                            entry.Choices = entry.Choices.replace(/\|\_\|/g, ", ");
                        }
                        this.empty = false;
                        this.loaded = true;
                        this.dataSource = new MatTableDataSource<Question>(this.questions);
                        this.changeDetect.markForCheck();
                    }
                }
            })
            .catch((err) => {
                this.empty = true;
                this.loaded = false;
                this.changeDetect.markForCheck();
                console.log(err)
            })
    }

    openEditZoneDialog(zone: Zone): void {
        console.log(zone);
        let dialogRef = this.dialog.open(ZoneDialogComponent, {
            width: '700px',
            data: {
                zone: zone
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result && (result.delete === true)) {
                let index = this.zones.findIndex(zone => zone.zone === result.old.zone);
                if (index !== -1) {
                    this.zones.splice(index, 1);
                    this.changeDetect.markForCheck();
                }
            }
            console.log('The dialog was closed');
        });
    }

    openEditQuestionDialog(question: Question): void {
        let dialogRef = this.dialog.open(EditQuestionDialogComponent, {
            width: '700px',
            data: {
                question: question
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result && (result.delete === true)) {
                let index = this.questions.findIndex(q => q.id === result.old.id);
                if (index !== -1) {
                    this.questions.splice(index, 1);
                    this.questionDisplay(this.branchName, this.zones[this.selectedTab].zone);
                }
            } else if (result && (result.update === true)) {
                let index = this.questions.findIndex(question => question.id === result.old.id);
                this.questions[index] = result.new; // Replaces object
                if (this.questions.length === 0) {
                    this.empty = true;
                    this.changeDetect.markForCheck();
                } else {
                    this.questionDisplay(this.branchName, this.zones[this.selectedTab].zone);
                }
                let update = JSON.parse(JSON.stringify(result.new)); // Erases the reference
                this.editInfo.editQuestion(update)
                    .then((result) => {
                        if (result.status === 'success') {
                            console.log("success");
                        }
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            }
        })
    }

    openCreateQuestionDialog(): void {
        let dialogRef = this.dialog.open(CreateQuestionDialogComponent, {
            width: '700px',
            data: {
                branch: this.branchName,
                zone: this.zones[this.selectedTab].zone
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            this.questions.push(result);
            this.questionDisplay(this.branchName, this.zones[this.selectedTab].zone);
        });
    }
}