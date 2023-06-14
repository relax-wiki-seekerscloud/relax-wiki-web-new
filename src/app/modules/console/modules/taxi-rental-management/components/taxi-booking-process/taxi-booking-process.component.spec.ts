import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxiBookingProcessComponent } from './taxi-booking-process.component';

describe('TaxiBookingProcessComponent', () => {
  let component: TaxiBookingProcessComponent;
  let fixture: ComponentFixture<TaxiBookingProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxiBookingProcessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxiBookingProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
