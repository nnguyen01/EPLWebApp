import { Component, OnInit, Input, HostBinding, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { MatTabChangeEvent, MatTableDataSource, MatDialog, MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { slideInDownAnimation } from '../../../animations';

import { EditQuestionDialogComponent } from '../../dialogs/edit-question-dialog/edit-question-dialog.component';

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

    questionDisplay(branch: string, zone: string): void {
        zone = zone.replace(/\s/g, "_");
        this.getInfo.getQuestions(branch, zone)
            .then((question) => {
                if (question.status === 'success') {
                    this.questions = question.data;
                    console.log(this.questions);
                    for (let entry of this.questions) {
                        if (entry.Choices !== null) {
                            entry.Choices = entry.Choices.replace(/\|\_\|/g, ", ");
                        }
                        this.loaded = true;
                        this.dataSource = new MatTableDataSource<Question>(this.questions);
                    }
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
            if (result && (result.update === true)) {
                let index = this.questions.findIndex(question => question.id === result.old.id);
                this.questions[index] = result.new; // Replaces object
                this.dataSource = new MatTableDataSource<Question>(this.questions); // Sets a new listener for the table
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
        });
    }

    highlight(row) {
        this.selectedRowIndex = row.id;
    }

    normallight(row) {
        this.selectedRowIndex = -1;
    }
}