import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelBookingSummaryComponent } from './hotel-booking-summary.component';

describe('HotelBookingSummaryComponent', () => {
  let component: HotelBookingSummaryComponent;
  let fixture: ComponentFixture<HotelBookingSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelBookingSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelBookingSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
