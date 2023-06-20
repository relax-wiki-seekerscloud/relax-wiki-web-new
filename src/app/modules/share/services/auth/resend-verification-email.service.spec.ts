import { TestBed } from '@angular/core/testing';

import { ResendVerificationEmailService } from './resend-verification-email.service';

describe('ResendVerificationEmailService', () => {
  let service: ResendVerificationEmailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResendVerificationEmailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
