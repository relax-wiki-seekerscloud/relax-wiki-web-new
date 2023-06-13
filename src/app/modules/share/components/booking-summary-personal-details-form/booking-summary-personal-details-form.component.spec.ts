import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingSummaryPersonalDetailsFormComponent } from './booking-summary-personal-details-form.component';

describe('BookingSummaryPersonalDetailsFormComponent', () => {
  let component: BookingSummaryPersonalDetailsFormComponent;
  let fixture: ComponentFixture<BookingSummaryPersonalDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingSummaryPersonalDetailsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingSummaryPersonalDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
