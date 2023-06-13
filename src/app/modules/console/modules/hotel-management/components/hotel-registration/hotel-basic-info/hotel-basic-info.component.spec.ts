import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelBasicInfoComponent } from './hotel-basic-info.component';

describe('HotelBasicInfoComponent', () => {
  let component: HotelBasicInfoComponent;
  let fixture: ComponentFixture<HotelBasicInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelBasicInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelBasicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
