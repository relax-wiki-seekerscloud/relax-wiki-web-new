import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelPaymentsComponent } from './hotel-payments.component';

describe('HotelPaymentsComponent', () => {
  let component: HotelPaymentsComponent;
  let fixture: ComponentFixture<HotelPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelPaymentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
