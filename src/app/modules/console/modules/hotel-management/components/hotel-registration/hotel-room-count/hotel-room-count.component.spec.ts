import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelRoomCountComponent } from './hotel-room-count.component';

describe('RoomCountComponent', () => {
  let component: HotelRoomCountComponent;
  let fixture: ComponentFixture<HotelRoomCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelRoomCountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelRoomCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
