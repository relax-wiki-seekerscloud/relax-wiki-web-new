import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementPaymentSuccessfulComponent } from './advertisement-payment-successful.component';

describe('AdvertisementPaymentSuccessfulComponent', () => {
  let component: AdvertisementPaymentSuccessfulComponent;
  let fixture: ComponentFixture<AdvertisementPaymentSuccessfulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvertisementPaymentSuccessfulComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvertisementPaymentSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
