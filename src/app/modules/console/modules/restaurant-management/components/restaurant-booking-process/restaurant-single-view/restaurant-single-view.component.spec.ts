import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantSingleViewComponent } from './restaurant-single-view.component';

describe('RestaurantSingleViewComponent', () => {
  let component: RestaurantSingleViewComponent;
  let fixture: ComponentFixture<RestaurantSingleViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantSingleViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantSingleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
