/**
	Zones

	Handles zone information
		- Gets zone and question information
		- Add, Delete and Update zones and their related questions
*/

import {
    Component, OnInit, Input, HostBinding,
    ChangeDetectionStrategy, ChangeDetectorRef,
    ViewChild
} from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { MatTabChangeEvent, MatTableDataSource, MatDialog, MatIconRegistry, MatPaginator } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { slideInDownAnimation } from '../../../animations';

import { CreateZoneDialogComponent } from '../../dialogs/create-zone-dialog/create-zone-dialog.component'
import { CreateQuestionDialogComponent } from '../../dialogs/create-question-dialog/create-question-dialog.component';
import { EditQuestionDialogComponent } from '../../dialogs/edit-question-dialog/edit-question-dialog.component';
import { EditZoneDialogComponent } from '../../dialogs/edit-zone-dialog/edit-zone-dialog.component';

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
    @ViewChild(MatPaginator) paginator: MatPaginator;

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
        } else {
            this.changeDetect.markForCheck();
        }
    }

    constructor(
        private route: ActivatedRoute,
        private changeDetect: ChangeDetectorRef,
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
                        this.dataSource.paginator = this.paginator;
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
        let dialogRef = this.dialog.open(EditZoneDialogComponent, {
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
            } else if (result && (result.update === true)) {
                let index = this.zones.findIndex(zone => zone.zone === result.old.zone);
                this.zones[index] = result.new;
                this.changeDetect.markForCheck();
            }
        });
    }

    ngAfterContentInit() {
        this.changeDetect.markForCheck();
    }

    openCreateZoneDialog(): void {
        let dialogRef = this.dialog.open(CreateZoneDialogComponent, {
            width: '700px',
            data: {
                data: this.branchName,
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.zones.push(result);
                this.changeDetect.markForCheck();
            }
        })
        this.changeDetect.markForCheck();

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
                this.questions[index] = result.new;
                if (this.questions.length === 0) {
                    this.empty = true;
                } else {
                    this.questionDisplay(this.branchName, this.zones[this.selectedTab].zone);
                }
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