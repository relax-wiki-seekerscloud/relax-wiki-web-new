import {Injectable} from '@angular/core';
import {SETTINGS} from "../../../../share/settings/commons.settings";
import {Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HotelBookingService {

  onBookHotel = new Subject();

  constructor(private httpClient: HttpClient) {
  }

  bookHotel(bookingRQ: any) {
    let response = this.httpClient.post(SETTINGS.ENDPOINTS.hotelBooking.url, bookingRQ);
    response.subscribe((data: any) => {
      console.log(data);
      this.onBookHotel.next(data);
    });
  }
}
