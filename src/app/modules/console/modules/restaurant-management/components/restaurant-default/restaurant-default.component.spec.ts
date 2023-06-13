import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantDefaultComponent } from './restaurant-default.component';

describe('RestaurantDefaultComponent', () => {
  let component: RestaurantDefaultComponent;
  let fixture: ComponentFixture<RestaurantDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantDefaultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
