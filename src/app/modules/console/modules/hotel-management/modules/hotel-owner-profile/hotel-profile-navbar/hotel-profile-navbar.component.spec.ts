import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelProfileNavbarComponent } from './hotel-profile-navbar.component';

describe('HotelProfileNavbarComponent', () => {
  let component: HotelProfileNavbarComponent;
  let fixture: ComponentFixture<HotelProfileNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelProfileNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelProfileNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
