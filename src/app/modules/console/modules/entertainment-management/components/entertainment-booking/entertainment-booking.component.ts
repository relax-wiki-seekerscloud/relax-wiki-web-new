import { Component, OnDestroy, OnInit } from '@angular/core';
import { LocalStorage } from 'ngx-webstorage';
import { SETTINGS } from '../../../../../share/settings/commons.settings';
import { EntertainmentBookingService } from '../../service/entertainment-booking.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entertainment-booking',
  templateUrl: './entertainment-booking.component.html',
  styleUrls: ['./entertainment-booking.component.scss']
})
export class EntertainmentBookingComponent implements OnInit, OnDestroy {
  paymentHandler: any = null; // stripe

  @LocalStorage(SETTINGS.STORAGE.SELECTED_ENTERTAINMENT_DATA_FOR_BOOKING)
  selectedEntertainment: any;

  firstName: string = '';
  lastName: string = '';
  email: string = '';
  specialRequests: string = '';
  bookingDate: string = '';
  arrivalTime: string = '';
  isBookingSaved: boolean = false;

  onBookingEntertainmentsSubs = new Subscription();

  constructor(private entertainmentBookingService: EntertainmentBookingService, private router: Router) {}

  ngOnInit(): void {
    this.invokeStripe();
    this.onBookingEntertainmentsSubs = this.entertainmentBookingService.onBookingEntertainments.subscribe((data: any) => {
      if (data.status === SETTINGS.RequestStatus.SUCCESS) {
        alert('Successfully saved the personal details!');
        this.isBookingSaved = true;
       // this.router.navigate(['/entertainment-management/entertainment-default']);
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
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      specialRequests: this.specialRequests,
      arrivalTime: this.arrivalTime,
      bookingDate: this.bookingDate,
      entertainmentID: this.selectedEntertainment.entertainmentID
    };

    if (
      bodyData.firstName === '' ||
      bodyData.lastName === '' ||
      bodyData.email === '' ||
      bodyData.specialRequests === '' ||
      bodyData.arrivalTime === '' ||
      bodyData.bookingDate === '' ||
      bodyData.entertainmentID === ''
    ) {
      alert('Please fill the correct data to submit');
      return;
    }

    this.entertainmentBookingService.entertainmentBooking(bodyData);
  }

  ngOnDestroy(): void {
    this.onBookingEntertainmentsSubs.unsubscribe();
  }

  makePayment(amount: any) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51NGEwxDCsAr50ZlRa9enerkjZx2WXN5oR4Kk1cI2I9YwfI45tvm8btHEgF5ige516bLKCJ7zmgL86upGeOPaAsaV00KT6d0Efw',
      locale: 'auto',
      token: (stripeToken: any) => {
        console.log(stripeToken);
        alert('Payment Successful!');
        this.router.navigate(['/entertainment-management/entertainment-default']);
      },
      closed: () => {
        // Handle the case when the payment is unsuccessful or the user closes the payment popup
        this.router.navigate(['/entertainment-management/entertainment-default']);
      }
    });
    paymentHandler.open({
      name: 'Entertainment Activity Payment',
      description: 'Entertainment activity booking payment',
      amount: amount * 100
    });
  }


  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51NGEwxDCsAr50ZlRa9enerkjZx2WXN5oR4Kk1cI2I9YwfI45tvm8btHEgF5ige516bLKCJ7zmgL86upGeOPaAsaV00KT6d0Efw',
          locale: 'auto',
          token: function(stripeToken: any) {
            console.log(stripeToken);
            alert('Payment has been successful!');
            this.router.navigate(['/entertainment-management/entertainment-default']);
          }
        });
      };
      window.document.body.appendChild(script);
    }
  }

  isBookingDetailsValid(): boolean {
    return (
      this.firstName.trim() !== '' &&
      this.lastName.trim() !== '' &&
      this.email.trim() !== '' &&
      this.specialRequests.trim() !== '' &&
      this.bookingDate.trim() !== '' &&
      this.arrivalTime.trim() !== ''
    );
  }

  isBookingDetailsSaved(): boolean {
    return this.isBookingDetailsValid() && this.isBookingSaved;
  }
}
