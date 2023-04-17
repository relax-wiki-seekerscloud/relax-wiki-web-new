import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantProfileNavbarComponent } from './restaurant-profile-navbar.component';

describe('RestaurantProfileNavbarComponent', () => {
  let component: RestaurantProfileNavbarComponent;
  let fixture: ComponentFixture<RestaurantProfileNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantProfileNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantProfileNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
