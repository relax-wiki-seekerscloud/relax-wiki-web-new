import { TestBed } from '@angular/core/testing';

import { EntertainmentListingService } from './entertainment-listing.service';

describe('EntertainmentListingService', () => {
  let service: EntertainmentListingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntertainmentListingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
