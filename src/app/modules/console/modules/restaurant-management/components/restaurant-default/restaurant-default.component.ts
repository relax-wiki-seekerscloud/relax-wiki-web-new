import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {LocalStorage} from "ngx-webstorage";
import {SETTINGS} from "../../../../../share/settings/commons.settings";

@Component({
  selector: 'app-restaurant-default',
  templateUrl: './restaurant-default.component.html',
  styleUrls: ['./restaurant-default.component.scss']
})
export class RestaurantDefaultComponent implements OnInit {

  restLocation: string = '';
  restDate: Date = new Date();
  restTime: String = "00:00";
  restPeople: number = 1;

  @LocalStorage(SETTINGS.STORAGE.RESTAURANT_SEARCH_DATA)
  restaurantSearchData: any;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  searchRestaurants() {
    if (this.restPeople < 1) {
      alert("Number of people cannot be less than 1");
      return;
    }

    let restaurantSearchRQ = {
      location: `${this.restLocation}`,
      dateStr: `${this.restDate}`,
      timeStr: `${this.restTime}`,
      numOfPeople: `${this.restPeople}`,
    };

    console.log(`Searching for restaurants in ${this.restLocation}...`);
    console.log(`Restaurant date: ${this.restDate}`);
    console.log(`Restaurant time: ${this.restTime}`);
    console.log(`Number of restaurant people: ${this.restPeople}`);

    this.restaurantSearchData = restaurantSearchRQ;

    // Perform the actual search and filtering of restaurants here, using the values from the input fields
  }

  onSearchRestaurant($event: MouseEvent) {
    this.searchRestaurants();

    this.router.navigate(['/restaurant-management/restaurant-list']);
  }
}
