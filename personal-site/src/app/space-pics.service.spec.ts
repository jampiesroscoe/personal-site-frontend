import { TestBed } from '@angular/core/testing';

import { SpacePicsService } from './space-pics.service';

describe('SpacePicsService', () => {
  let service: SpacePicsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpacePicsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
