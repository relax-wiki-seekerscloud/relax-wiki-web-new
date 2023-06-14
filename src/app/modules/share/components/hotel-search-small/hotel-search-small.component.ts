import {Component, OnInit} from '@angular/core';
import {HotelSearchService} from "../../../console/modules/hotel-management/service/hotel-search.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LocalStorage} from "ngx-webstorage";
import {SETTINGS} from "../../settings/commons.settings";

@Component({
  selector: 'app-hotel-search-small',
  templateUrl: './hotel-search-small.component.html',
  styleUrls: ['./hotel-search-small.component.scss']
})
export class HotelSearchSmallComponent implements OnInit {
  hotelSearchForm: FormGroup;

  hotelLocation: string = '';
  hotelCheckin: Date = new Date();
  hotelCheckout: Date = new Date();
  numOfAdults: number = 0;
  numOfChildren: number = 0;
  hotelRooms: number = 0;

  @LocalStorage(SETTINGS.STORAGE.FILTER_BY_BUDGET_DATA_ARR)
  filterByBudgetDataArray: any;

  @LocalStorage(SETTINGS.STORAGE.FILTER_BY_RATINGS_DATA_ARR)
  filterByRatingsDataArray: any;

  constructor(private hotelSearchService: HotelSearchService,
              private formBuilder: FormBuilder,) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.hotelSearchForm = this.formBuilder.group({
      hotelLocation: ["", Validators.compose([
        Validators.required
      ])],
      hotelCheckin: [""],
      hotelCheckout: [""],
      numOfAdults: ["", Validators.compose([
        Validators.required
      ])],
      numOfChildren: ["", Validators.compose([
        Validators.required
      ])],
      hotelRooms: [""],
    });
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

  isControlHasError(controlName: string, validationType: string): boolean {
    const control = this.hotelSearchForm.controls[controlName];
    if (!control) {
      return false;
    }

    const result = control.hasError(validationType) && (control.dirty || control.touched);
    return result;
  }

  isFormValid() {
    return this.hotelSearchForm.valid;
  }

  onSearch() {
    let submitData = Object.assign({}, this.hotelSearchForm.getRawValue());
    submitData.filterByBudgetArr = this.filterByBudgetDataArray;
    submitData.filterByRatingsArr = this.filterByRatingsDataArray;

    this.hotelSearchService.searchHotels(submitData);
  }
}
