import { TestBed, inject } from '@angular/core/testing';

import { CreateInfoService } from './create-info.service';

describe('CreateInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateInfoService]
    });
  });

  it('should be created', inject([CreateInfoService], (service: CreateInfoService) => {
    expect(service).toBeTruthy();
  }));
});
