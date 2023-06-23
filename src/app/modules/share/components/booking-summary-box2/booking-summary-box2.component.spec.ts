import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingSummaryBox2Component } from './booking-summary-box2.component';

describe('BookingSummaryBox2Component', () => {
  let component: BookingSummaryBox2Component;
  let fixture: ComponentFixture<BookingSummaryBox2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingSummaryBox2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingSummaryBox2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
