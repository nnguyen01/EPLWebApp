import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {
    Router, Resolve, RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Zone } from '../models/zone';
import { GetInfoService } from './get-info.service';

@Injectable()
export class DashboardZoneResolver implements Resolve<Zone>{

    constructor(private getInfo: GetInfoService, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Zone> {
        let branchName = route.paramMap.get('branch');
        return this.getInfo.getZones(branchName);
    }
}
