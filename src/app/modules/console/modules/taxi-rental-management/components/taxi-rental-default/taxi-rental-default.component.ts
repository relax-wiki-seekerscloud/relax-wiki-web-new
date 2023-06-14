import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taxi-rental-default',
  templateUrl: './taxi-rental-default.component.html',
  styleUrls: ['./taxi-rental-default.component.scss']
})
export class TaxiRentalDefaultComponent implements OnInit {
  carDestination: string = '';
  carDate: Date = new Date();
  carPeople: number = 1;
  carPickupPoint: string = '';
  carPickupTime:String = "00:00" ;

  constructor() { }

  ngOnInit(): void {
  }

  searchRentalVehicles() {
    if (this.carPeople < 1) {
      alert("Number of people cannot be less than 1");
      return;
    }


    console.log(`Searching for cars in ${this.carDestination}...`);
    console.log(`Car date: ${this.carDate}`);
    console.log(`Number of people: ${this.carPeople}`);
    console.log(`Pickup point: ${this.carPickupPoint}`);
    console.log(`Pickup time: ${this.carPickupTime}`);

    // Perform the actual search and filtering of cars here, using the values from the input fields
  }

}
