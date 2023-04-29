import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxiBookingSummaryComponent } from './taxi-booking-summary.component';

describe('TaxiBookingSummaryComponent', () => {
  let component: TaxiBookingSummaryComponent;
  let fixture: ComponentFixture<TaxiBookingSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxiBookingSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxiBookingSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
