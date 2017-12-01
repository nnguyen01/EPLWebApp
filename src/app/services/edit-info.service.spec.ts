import { TestBed, inject } from '@angular/core/testing';

import { EditInfoService } from './edit-info.service';

describe('EditInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditInfoService]
    });
  });

  it('should be created', inject([EditInfoService], (service: EditInfoService) => {
    expect(service).toBeTruthy();
  }));
});
