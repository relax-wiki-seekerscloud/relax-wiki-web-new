import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HotelBookingService} from "../../../service/hotel-booking.service";
import {SETTINGS} from "../../../../../../share/settings/commons.settings";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";
import {LocalStorage} from "ngx-webstorage";
import {HotelDto} from "../../../dto/hotel-dto";

@Component({
  selector: 'app-hotel-booking-summary',
  templateUrl: './hotel-booking-summary.component.html',
  styleUrls: ['./hotel-booking-summary.component.scss']
})
export class HotelBookingSummaryComponent implements OnInit, OnDestroy {

  firstName: string = "";
  lastName: string = "";
  email: string = "";
  specialRequests: string = "";
  bookingDate: string = "";
  arrivalTime: string = "";

  @LocalStorage(SETTINGS.STORAGE.SELECTED_HOTEL_DATA_FOR_BOOKING)
  selectedHotelDataForBooking: HotelDto;

  @LocalStorage(SETTINGS.STORAGE.SELECTED_HOTEL_ROOM_TYPE_DATA_FOR_BOOKING)
  selectedHotelRoomTypeDataForBooking: any;

  onBookHotelSubs = new Subscription();

  constructor(private hotelBookingService: HotelBookingService,
              private router: Router) {
  }

  addBookingPersonalDetails() {
    let bodyData = {
      "firstName": this.firstName,
      "lastName": this.lastName,
      "email": this.email,
      "specialRequests": this.specialRequests,
      "arrivalTime": this.arrivalTime,
      "bookingDate": this.bookingDate,
      "hotelID": this.selectedHotelDataForBooking.hotelID,
      "hotelRoomTypeID": this.selectedHotelRoomTypeDataForBooking.hotelRoomTypeID
    };

    if (bodyData.firstName === '' || bodyData.lastName === '' || bodyData.email === '' ||
      bodyData.specialRequests === '' || bodyData.arrivalTime === '' || bodyData.bookingDate === ''
      || bodyData.hotelID === '' || bodyData.hotelRoomTypeID === '') {
      alert("Please fill the correct data to submit");
      return;
    }

    this.hotelBookingService.bookHotel(bodyData);
  }

  ngOnInit(): void {
    this.onBookHotelSubs = this.hotelBookingService.onBookHotel
      .subscribe((data: any) => {
        if (data.status === SETTINGS.RequestStatus.SUCCESS) {
          alert('Successfully booked the hotel');
          this.router.navigate(['/hotel-management/hotel-default']);
        } else if (data.status == SETTINGS.RequestStatus.FAILED) {
          data.appsErrorMessages.forEach((s: any) => {
            alert(s);
          });
        } else {
          alert('Something went wrong, Please contact administration');
        }
      });
  }

  ngOnDestroy(): void {
    this.onBookHotelSubs.unsubscribe();
  }
}
