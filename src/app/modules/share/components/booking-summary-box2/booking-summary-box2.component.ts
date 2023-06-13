import { Component, OnInit } from '@angular/core';
import {LocalStorage} from "ngx-webstorage";
import {SETTINGS} from "../../settings/commons.settings";
import {HotelDto} from "../../../console/modules/hotel-management/dto/hotel-dto";

@Component({
  selector: 'app-booking-summary-box2',
  templateUrl: './booking-summary-box2.component.html',
  styleUrls: ['./booking-summary-box2.component.scss']
})
export class BookingSummaryBox2Component implements OnInit {

  @LocalStorage(SETTINGS.STORAGE.SELECTED_HOTEL_DATA_FOR_BOOKING)
  selectedHotelDataForBooking: HotelDto;

  @LocalStorage(SETTINGS.STORAGE.SELECTED_HOTEL_ROOM_TYPE_DATA_FOR_BOOKING)
  selectedHotelRoomTypeDataForBooking: any;

  constructor() { }

  ngOnInit(): void {
  }
}
