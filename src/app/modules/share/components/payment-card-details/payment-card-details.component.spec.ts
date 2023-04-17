import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentCardDetailsComponent } from './payment-card-details.component';

describe('PaymentCardDetailsComponent', () => {
  let component: PaymentCardDetailsComponent;
  let fixture: ComponentFixture<PaymentCardDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentCardDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentCardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
