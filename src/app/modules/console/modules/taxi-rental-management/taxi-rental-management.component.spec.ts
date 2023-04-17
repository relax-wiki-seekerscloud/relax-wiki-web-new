import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxiRentalManagementComponent } from './taxi-rental-management.component';

describe('TaxiRentalManagementComponent', () => {
  let component: TaxiRentalManagementComponent;
  let fixture: ComponentFixture<TaxiRentalManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxiRentalManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxiRentalManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
