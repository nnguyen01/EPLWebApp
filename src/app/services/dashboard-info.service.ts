import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DashboardInfoService {

    private branchSource = new Subject<string>();

    branch$ = this.branchSource.asObservable();

    getBranch(branch: string) {
        this.branchSource.next(branch);
    }
}
