import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxiRentalDefaultComponent } from './taxi-rental-default.component';

describe('TaxiRentalDefaultComponent', () => {
  let component: TaxiRentalDefaultComponent;
  let fixture: ComponentFixture<TaxiRentalDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxiRentalDefaultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxiRentalDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
