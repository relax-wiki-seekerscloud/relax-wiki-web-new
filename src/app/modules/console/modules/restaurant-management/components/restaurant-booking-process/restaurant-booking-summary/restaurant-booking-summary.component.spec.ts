import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantBookingSummaryComponent } from './restaurant-booking-summary.component';

describe('RestaurantBookingSummaryComponent', () => {
  let component: RestaurantBookingSummaryComponent;
  let fixture: ComponentFixture<RestaurantBookingSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantBookingSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantBookingSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
