import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelListingSuccessfulComponent } from './hotel-listing-successful.component';

describe('HotelListingSuccessfulComponent', () => {
  let component: HotelListingSuccessfulComponent;
  let fixture: ComponentFixture<HotelListingSuccessfulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelListingSuccessfulComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelListingSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
