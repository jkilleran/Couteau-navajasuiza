import { TestBed } from '@angular/core/testing';

import { GetUniversityService } from './get-university.service';

describe('GetUniversityService', () => {
  let service: GetUniversityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetUniversityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
