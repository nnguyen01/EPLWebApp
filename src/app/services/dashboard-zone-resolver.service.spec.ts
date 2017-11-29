import { TestBed, inject } from '@angular/core/testing';

import { DashboardZoneResolverService } from './dashboard-zone-resolver.service';

describe('DashboardZoneResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DashboardZoneResolverService]
    });
  });

  it('should be created', inject([DashboardZoneResolverService], (service: DashboardZoneResolverService) => {
    expect(service).toBeTruthy();
  }));
});
