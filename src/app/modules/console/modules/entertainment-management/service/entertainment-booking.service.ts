import {Injectable} from '@angular/core';
import {SETTINGS} from "../../../../share/settings/commons.settings";
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EntertainmentBookingService {

  onBookingEntertainments = new Subject();

  constructor(private httpClient: HttpClient) {
  }

  entertainmentBooking(bookingRQ: any) {
    let response = this.httpClient.post(SETTINGS.ENDPOINTS.entertainmentBooking.url, bookingRQ);
    response.subscribe((data: any) => {
      this.onBookingEntertainments.next(data);
    });
  }
}
