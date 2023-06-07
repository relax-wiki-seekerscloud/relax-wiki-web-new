import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantMoreInfoComponent } from './restaurant-more-info.component';

describe('RestaurantMoreInfoComponent', () => {
  let component: RestaurantMoreInfoComponent;
  let fixture: ComponentFixture<RestaurantMoreInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantMoreInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantMoreInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
