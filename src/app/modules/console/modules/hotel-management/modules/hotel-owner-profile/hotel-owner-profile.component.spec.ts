import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelOwnerProfileComponent } from './hotel-owner-profile.component';

describe('HotelOwnerProfileComponent', () => {
  let component: HotelOwnerProfileComponent;
  let fixture: ComponentFixture<HotelOwnerProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelOwnerProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelOwnerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
