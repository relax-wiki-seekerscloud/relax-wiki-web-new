import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantFeaturesComponent } from './restaurant-features.component';

describe('RestaurantFeaturesComponent', () => {
  let component: RestaurantFeaturesComponent;
  let fixture: ComponentFixture<RestaurantFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantFeaturesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
