import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementPaymentFaildComponent } from './advertisement-payment-faild.component';

describe('AdvertisementPaymentFaildComponent', () => {
  let component: AdvertisementPaymentFaildComponent;
  let fixture: ComponentFixture<AdvertisementPaymentFaildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvertisementPaymentFaildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvertisementPaymentFaildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
