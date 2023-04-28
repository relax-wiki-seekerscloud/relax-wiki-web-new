import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingSummaryPersonnalDetailsFormComponent } from './booking-summary-personnal-details-form.component';

describe('BookingSummaryPersonnalDetailsFormComponent', () => {
  let component: BookingSummaryPersonnalDetailsFormComponent;
  let fixture: ComponentFixture<BookingSummaryPersonnalDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingSummaryPersonnalDetailsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingSummaryPersonnalDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
