import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

import { Branch } from '../../../models/branch';

@Component({
    selector: 'app-dashboard-home',
    templateUrl: './dashboard-home.component.html',
    styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit {
    private branch: Branch;
    constructor() { }
    ngOnInit(): void {
        this.branch = new Branch("Clareview", 
            "TestID12345678", 
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Melk_-_Abbey_-_Library.jpg/1200px-Melk_-_Abbey_-_Library.jpg")
    }
}
