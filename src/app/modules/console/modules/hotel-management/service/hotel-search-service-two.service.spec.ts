import { TestBed } from '@angular/core/testing';

import { HotelSearchServiceTwoService } from './hotel-search-service-two.service';

describe('HotelSearchServiceTwoService', () => {
  let service: HotelSearchServiceTwoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelSearchServiceTwoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
