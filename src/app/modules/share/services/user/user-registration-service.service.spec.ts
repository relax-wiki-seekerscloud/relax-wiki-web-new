import { TestBed } from '@angular/core/testing';

import { UserRegistrationService } from './user-registration-service.service';

describe('UserRegistrationServiceService', () => {
  let service: UserRegistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserRegistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
