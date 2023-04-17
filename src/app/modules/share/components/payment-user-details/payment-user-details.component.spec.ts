import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentUserDetailsComponent } from './payment-user-details.component';

describe('PaymentUserDetailsComponent', () => {
  let component: PaymentUserDetailsComponent;
  let fixture: ComponentFixture<PaymentUserDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentUserDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentUserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
