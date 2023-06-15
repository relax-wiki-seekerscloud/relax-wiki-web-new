import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {
  EntertainmentListingService
} from "../../../../../../share/services/entertainment/entertainment-listing.service";
import {RestaurantMoreInfo} from "../../../../../../share/dto/classes/restaurant/RequestRestaurantListDTO";
import {EntertainmentMoreInfo} from "../../../../../../share/dto/classes/entertainment/RequestEntertainmentListDTO";

@Component({
  selector: 'app-entertainment-more-info',
  templateUrl: './entertainment-more-info.component.html',
  styleUrls: ['./entertainment-more-info.component.scss']
})
export class EntertainmentMoreInfoComponent implements OnInit {

  entertainmentMoreInfo: FormGroup;
  public open_from_string: String = "08:00"
  public open_to_string: String = "22:00"

  constructor(private fb: FormBuilder, private router: Router, private entertainmentListingService: EntertainmentListingService) {

    this.entertainmentMoreInfo = this.fb.group({
      entertainmentCategory: new FormControl(['']),
      transportationMethodsArray: this.fb.array([]),
      openTimeFrom: new FormControl(['']),
      openTimeTo: new FormControl(['']),
      servedMealsArray: this.fb.array([]),
      lowestRateForOnePerson:new FormControl('',[Validators.required]),
    })
  }

  TransportationMethods:Array<any>=[
    {name: 'Shuttle Service', value: 'shuttleService'},
    {name: 'Rental Cars', value: 'rentalCars'},
    {name: 'Public Transportation', value: 'publicTransportation'},
    {name: 'Airport Transfers', value: 'airportTransfers'},
    {name: 'Private Chauffeur', value: 'privateChauffeur'},
    {name: 'Bike Rentals', value: 'bikeRentals'},
    {name: 'Off-Road Vehicles', value: 'offRoadVehicles'},
    {name: 'Ride-Sharing Services', value: 'rideSharingServices'},
    {name: 'No Transportation Provided', value: 'unavailable'},
  ]

  ServedMeals: Array<any> = [
    {name: 'Breakfast', value: 'breakfast'},
    {name: 'Late Night', value: 'lateNight'},
    {name: 'Drinks', value: 'drinks'},
    {name: 'Lunch', value: 'lunch'},
    {name: 'Brunch', value: 'brunch'},
    {name: 'Dinner', value: 'dinner'},
  ]

  addToArray(e: any, type: String) {
    let array: FormArray;
    if (type == 'transportationMethods') {
      array = this.entertainmentMoreInfo.get('transportationMethodsArray') as FormArray;
    } else {
      array = this.entertainmentMoreInfo.get('servedMealsArray') as FormArray;
    }
    if (e?.checked) {
      array.push(new FormControl(e.source.value));
    } else {
      let i: number = 0;
      array.controls.forEach((item: AbstractControl) => {
        if (item?.value == e?.source?.value) {
          array.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
  addEntertainmentMoreInfo(){
    let moreInfoDTO: EntertainmentMoreInfo = new EntertainmentMoreInfo(
      this.entertainmentMoreInfo.get('transportationMethodsArray')?.value!,
      this.entertainmentMoreInfo.get('servedMealsArray')?.value!,
      this.entertainmentMoreInfo.get('entertainmentCategory')?.value!,
      this.entertainmentMoreInfo.get('openTimeFrom')?.value!,
      this.entertainmentMoreInfo.get('openTimeTo')?.value!,
      this.entertainmentMoreInfo.get('lowestRateForOnePerson')?.value!,
    )

    this.entertainmentListingService.addMoreInfoToEntertainment(moreInfoDTO);
    console.log(this.entertainmentListingService.entertainmentListDTO);
    this.router.navigate(['/console/entertainment-management/entertainment-registration/entertainment-facilities']).then();
  }
  ngOnInit(): void {
  }

  get lowestRateForOnePerson(){
    return this.entertainmentMoreInfo.get('lowestRateForOnePerson');
  }
}
