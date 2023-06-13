import {Component, OnInit} from '@angular/core';
import {SETTINGS} from "../../../../../../share/settings/commons.settings";
import {HotelSearchService} from "../../../service/hotel-search.service";
import {HotelService} from "../../../service/hotel.service";
import {Subscription} from "rxjs";
import {HotelDto} from "../../../dto/hotel-dto";
import {Router} from "@angular/router";
import {LocalStorage} from "ngx-webstorage";

@Component({
  selector: 'app-hotel-single-view',
  templateUrl: './hotel-single-view.component.html',
  styleUrls: ['./hotel-single-view.component.scss']
})
export class HotelSingleViewComponent implements OnInit {

  hotelDto: HotelDto = new HotelDto();

  onSelectedHotelChangeSubs = new Subscription();

  @LocalStorage(SETTINGS.STORAGE.SELECTED_HOTEL_DATA_FOR_BOOKING)
  selectedHotelDataForBooking: HotelDto;

  @LocalStorage(SETTINGS.STORAGE.SELECTED_HOTEL_ROOM_TYPE_DATA_FOR_BOOKING)
  selectedHotelRoomTypeDataForBooking: any;

  constructor(private hotelService: HotelService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.onSelectedHotelChangeSubs = this.hotelService.onSelectedHotelChange
      .subscribe((data: any) => {
        if (data.status === SETTINGS.RequestStatus.SUCCESS) {
          if (data.result) {
            this.hotelDto = new HotelDto(data.result);
          }
        } else if (data.status == SETTINGS.RequestStatus.FAILED) {
          data.appsErrorMessages.forEach((s: any) => {
            alert(s);
          });
        } else {
          alert('Something went wrong, Please contact administration');
        }
      });
  }

  onBook(hotelDto: HotelDto, hotelRoomType: any) {
    this.selectedHotelDataForBooking = hotelDto;
    this.selectedHotelRoomTypeDataForBooking = hotelRoomType;

    this.router.navigate(['/hotel-booking-process/hotel-booking-summary']);

  }
}
