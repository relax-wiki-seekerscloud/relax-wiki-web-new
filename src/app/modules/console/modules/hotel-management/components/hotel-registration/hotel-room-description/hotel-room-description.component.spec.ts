import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelRoomDescriptionComponent } from './hotel-room-description.component';

describe('RoomDescriptionComponent', () => {
  let component: HotelRoomDescriptionComponent;
  let fixture: ComponentFixture<HotelRoomDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelRoomDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelRoomDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
