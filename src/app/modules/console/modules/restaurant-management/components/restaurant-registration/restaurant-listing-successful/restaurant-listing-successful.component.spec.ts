import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantListingSuccessfulComponent } from './restaurant-listing-successful.component';

describe('RestaurantListingSuccessfulComponent', () => {
  let component: RestaurantListingSuccessfulComponent;
  let fixture: ComponentFixture<RestaurantListingSuccessfulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantListingSuccessfulComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantListingSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
