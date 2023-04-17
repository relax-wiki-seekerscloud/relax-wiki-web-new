import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel-search-small',
  templateUrl: './hotel-search-small.component.html',
  styleUrls: ['./hotel-search-small.component.scss']
})
export class HotelSearchSmallComponent implements OnInit {
  hotelLocation: string = '';
  hotelCheckin: Date = new Date();
  hotelCheckout: Date = new Date();
  numOfAdults: number = 0;
  numOfChildren: number = 0;
  hotelRooms: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  searchHotels() {
    if (this.numOfAdults < 1) {
      alert("Number of adults cannot be less than 1");
      return;
    }

    if (this.numOfChildren < 0) {
      alert("Number of children cannot be negative");
      return;
    }

    if (this.hotelRooms < 1) {
      alert("Number of rooms cannot be less than 1");
      return;
    }

    console.log(`Searching for hotels in ${this.hotelLocation}...`);
    console.log(`Check-in date: ${this.hotelCheckin}`);
    console.log(`Check-out date: ${this.hotelCheckout}`);
    console.log(`Number of adults: ${this.numOfAdults}`);
    console.log(`Number of children: ${this.numOfChildren}`);
    console.log(`Number of rooms: ${this.hotelRooms}`);
    // Perform the actual search and filtering of hotels here, using the values from the input fields
  }

}
