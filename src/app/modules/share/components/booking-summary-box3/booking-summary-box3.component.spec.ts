import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingSummaryBox3Component } from './booking-summary-box3.component';

describe('BookingSummaryBox3Component', () => {
  let component: BookingSummaryBox3Component;
  let fixture: ComponentFixture<BookingSummaryBox3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingSummaryBox3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingSummaryBox3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
