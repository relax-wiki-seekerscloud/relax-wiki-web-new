import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelDefaultComponent } from './hotel-default.component';

describe('HotelDefaultComponent', () => {
  let component: HotelDefaultComponent;
  let fixture: ComponentFixture<HotelDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelDefaultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
