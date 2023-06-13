import {Component, OnDestroy, OnInit} from '@angular/core';
import {LocalStorage} from "ngx-webstorage";
import {SETTINGS} from "../../../../../share/settings/commons.settings";
import {EntertainmentBookingService} from "../../service/entertainment-booking.service";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-entertainment-booking',
  templateUrl: './entertainment-booking.component.html',
  styleUrls: ['./entertainment-booking.component.scss']
})
export class EntertainmentBookingComponent implements OnInit, OnDestroy {

  @LocalStorage(SETTINGS.STORAGE.SELECTED_ENTERTAINMENT_DATA_FOR_BOOKING)
  selectedEntertainment: any;

  firstName: string = "";
  lastName: string = "";
  email: string = "";
  specialRequests: string = "";
  bookingDate: string = "";
  arrivalTime: string = "";

  onBookingEntertainmentsSubs = new Subscription();

  constructor(private entertainmentBookingService: EntertainmentBookingService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.onBookingEntertainmentsSubs = this.entertainmentBookingService.onBookingEntertainments
      .subscribe((data: any) => {
        if (data.status === SETTINGS.RequestStatus.SUCCESS) {
          alert('Successfully booked the Entertainment');
          this.router.navigate(['/entertainment-management/entertainment-default']);
        } else if (data.status == SETTINGS.RequestStatus.FAILED) {
          data.appsErrorMessages.forEach((s: any) => {
            alert(s);
          });
        } else {
          alert('Something went wrong, Please contact administration');
        }
      });
  }

  addBookingPersonalDetails() {
    let bodyData = {
      "firstName": this.firstName,
      "lastName": this.lastName,
      "email": this.email,
      "specialRequests": this.specialRequests,
      "arrivalTime": this.arrivalTime,
      "bookingDate": this.bookingDate,
      "entertainmentID": this.selectedEntertainment.entertainmentID,
    };

    if (bodyData.firstName === '' || bodyData.lastName === '' || bodyData.email === '' ||
      bodyData.specialRequests === '' || bodyData.arrivalTime === '' || bodyData.bookingDate === ''
      || bodyData.entertainmentID === '') {
      alert("Please fill the correct data to submit");
      return;
    }

    this.entertainmentBookingService.entertainmentBooking(bodyData);
  }

  ngOnDestroy(): void {
    this.onBookingEntertainmentsSubs.unsubscribe();
  }
}
