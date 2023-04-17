import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantBookingProcessComponent } from './restaurant-booking-process.component';

describe('RestaurantBookingProcessComponent', () => {
  let component: RestaurantBookingProcessComponent;
  let fixture: ComponentFixture<RestaurantBookingProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantBookingProcessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantBookingProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
