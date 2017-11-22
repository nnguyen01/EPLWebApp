import { TestBed, inject } from '@angular/core/testing';

import { GetInfoService } from './get-info.service';

describe('GetInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetInfoService]
    });
  });

  it('should be created', inject([GetInfoService], (service: GetInfoService) => {
    expect(service).toBeTruthy();
  }));
});
