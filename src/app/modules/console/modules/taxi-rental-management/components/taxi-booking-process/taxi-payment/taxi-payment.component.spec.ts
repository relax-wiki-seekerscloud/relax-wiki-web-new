import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxiPaymentComponent } from './taxi-payment.component';

describe('TaxiPaymentComponent', () => {
  let component: TaxiPaymentComponent;
  let fixture: ComponentFixture<TaxiPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxiPaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxiPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
