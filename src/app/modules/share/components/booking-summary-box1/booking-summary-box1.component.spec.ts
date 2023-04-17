import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingSummaryBox1Component } from './booking-summary-box1.component';

describe('BookingSummaryBox1Component', () => {
  let component: BookingSummaryBox1Component;
  let fixture: ComponentFixture<BookingSummaryBox1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingSummaryBox1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingSummaryBox1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
