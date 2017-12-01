import { TestBed, inject } from '@angular/core/testing';

import { DeleteInfoService } from './delete-info.service';

describe('DeleteInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeleteInfoService]
    });
  });

  it('should be created', inject([DeleteInfoService], (service: DeleteInfoService) => {
    expect(service).toBeTruthy();
  }));
});
