import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { HotelBookingService } from "../../../service/hotel-booking.service";
import { SETTINGS } from "../../../../../../share/settings/commons.settings";
import { Subscription } from "rxjs";
import { Router } from "@angular/router";
import { LocalStorage } from "ngx-webstorage";
import { HotelDto } from "../../../dto/hotel-dto";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hotel-booking-summary',
  templateUrl: './hotel-booking-summary.component.html',
  styleUrls: ['./hotel-booking-summary.component.scss']
})
export class HotelBookingSummaryComponent implements OnInit, OnDestroy {

  paymentHandler: any = null; // stripe
  firstName: string = "";
  lastName: string = "";
  email: string = "";
  specialRequests: string = "";
  bookingDate: string = "";
  arrivalTime: string = "";
  bookingDetailsSaved: boolean = false; // Track the status of booking details


  @LocalStorage(SETTINGS.STORAGE.SELECTED_HOTEL_DATA_FOR_BOOKING)
  selectedHotelDataForBooking: HotelDto;

  @LocalStorage(SETTINGS.STORAGE.SELECTED_HOTEL_ROOM_TYPE_DATA_FOR_BOOKING)
  selectedHotelRoomTypeDataForBooking: any;


  onBookHotelSubs = new Subscription();

  constructor(private hotelBookingService: HotelBookingService,
              private router: Router,
              private httpClient: HttpClient) {
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

    // Assume the bookHotel method returns a promise or observable to track success/failure
    // @ts-ignore
    this.hotelBookingService.bookHotel(bodyData)
      ((data: any) => {
        if (data.status === SETTINGS.RequestStatus.SUCCESS) {
          alert('Successfully saved the booking details');
          this.bookingDetailsSaved = true; // Set the flag to true when booking details are saved
        } else if (data.status == SETTINGS.RequestStatus.FAILED) {
          data.appsErrorMessages.forEach((s: any) => {
            alert(s);
          });
        } else {
          alert('Something went wrong, Please contact administration');
        }
      });
  }

  ngOnInit(): void {
    this.onBookHotelSubs = this.hotelBookingService.onBookHotel
      .subscribe((data: any) => {
        if (data.status === SETTINGS.RequestStatus.SUCCESS) {
          alert('Successfully saved the booking details');
          this.bookingDetailsSaved = true; // Set the flag to true when booking details are saved
        } else if (data.status == SETTINGS.RequestStatus.FAILED) {
          data.appsErrorMessages.forEach((s: any) => {
            alert(s);
          });
        } else {
          alert('Something went wrong, Please contact administration');
        }
      });

    this.invokeStripe();
  }

  ngOnDestroy(): void {
    this.onBookHotelSubs.unsubscribe();
  }

  makePayment(amount: any) {
    // Only allow payment if booking details are saved
    if (this.bookingDetailsSaved) {
      const paymentHandler = (<any>window).StripeCheckout.configure({
        key: 'pk_test_51NGEwxDCsAr50ZlRa9enerkjZx2WXN5oR4Kk1cI2I9YwfI45tvm8btHEgF5ige516bLKCJ7zmgL86upGeOPaAsaV00KT6d0Efw',
        locale: 'auto',
        token: (stripeToken: any) => {
          console.log(stripeToken); // You can remove this log or replace it with appropriate handling

          // Send the token to your server using an HTTP request
          this.httpClient.post('http://localhost:8080/hotelPayment', { token: stripeToken.id, amount: amount })
            .subscribe(
              (response: any) => {
                // Handle the server response after successful payment
                console.log(response);
                alert('Payment has been successful!');
                // Perform any additional actions or navigate to a different page
                this.router.navigate(['/hotel-management/hotel-default']);
              },
              (error: any) => {
                // Handle any errors that occurred during payment processing
                console.log(error);
                alert('Payment has been successful.');
                this.router.navigate(['/hotel-management/hotel-default']);
              }
            );
        },
      });
      paymentHandler.open({
        name: 'Hotel Payment',
        description: 'Hotel booking payment',
        amount: amount * 100,
      });
    } else {
      alert("Please save the booking details before proceeding to payment.");
    }
  }

  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: "pk_test_51NGEwxDCsAr50ZlRa9enerkjZx2WXN5oR4Kk1cI2I9YwfI45tvm8btHEgF5ige516bLKCJ7zmgL86upGeOPaAsaV00KT6d0Efw",
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken);
            alert('Payment has been successful!');
          },
        });
      };
      window.document.body.appendChild(script);
    }
  }
}
