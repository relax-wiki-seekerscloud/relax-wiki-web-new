import { TestBed } from '@angular/core/testing';

import { ConsolePageService } from './console-page.service';

describe('ConsolePageService', () => {
  let service: ConsolePageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsolePageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
