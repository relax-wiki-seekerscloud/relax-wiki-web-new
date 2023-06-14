import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelBookingProcessComponent } from './hotel-booking-process.component';

describe('HotelBookingProcessComponent', () => {
  let component: HotelBookingProcessComponent;
  let fixture: ComponentFixture<HotelBookingProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelBookingProcessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelBookingProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
