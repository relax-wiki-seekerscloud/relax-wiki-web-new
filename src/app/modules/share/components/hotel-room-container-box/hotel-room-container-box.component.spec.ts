import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelRoomContainerBoxComponent } from './hotel-room-container-box.component';

describe('HotelRoomContainerBoxComponent', () => {
  let component: HotelRoomContainerBoxComponent;
  let fixture: ComponentFixture<HotelRoomContainerBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelRoomContainerBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelRoomContainerBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
