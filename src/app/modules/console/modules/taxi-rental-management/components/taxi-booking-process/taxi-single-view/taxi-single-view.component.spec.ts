import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxiSingleViewComponent } from './taxi-single-view.component';

describe('TaxiSingleViewComponent', () => {
  let component: TaxiSingleViewComponent;
  let fixture: ComponentFixture<TaxiSingleViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxiSingleViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxiSingleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
