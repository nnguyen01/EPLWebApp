import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { LibraryBranch } from '../models/library-branch';

@Injectable()
export class DataService {

    constructor() { }

    // Observable string sources
    private dialogSource = new Subject<LibraryBranch>();

    // Observable string streams
    dialogSource$ = this.dialogSource.asObservable();

    // Service message commands
    submitBranch(data: LibraryBranch) {
        console.log(data);
        this.dialogSource.next(data);
    }
}
