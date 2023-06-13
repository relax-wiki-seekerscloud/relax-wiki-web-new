import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelPhotosComponent } from './hotel-photos.component';

describe('HotelPhotosComponent', () => {
  let component: HotelPhotosComponent;
  let fixture: ComponentFixture<HotelPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelPhotosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
