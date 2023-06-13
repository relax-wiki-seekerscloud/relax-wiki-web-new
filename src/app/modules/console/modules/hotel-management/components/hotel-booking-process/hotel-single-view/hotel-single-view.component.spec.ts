import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelSingleViewComponent } from './hotel-single-view.component';

describe('HotelSingleViewComponent', () => {
  let component: HotelSingleViewComponent;
  let fixture: ComponentFixture<HotelSingleViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelSingleViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelSingleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
