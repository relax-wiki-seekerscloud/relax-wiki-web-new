import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {RestaurantFeatures} from "../../../../../../share/dto/classes/restaurant/RequestRestaurantListDTO";
import {RestaurantListingService} from "../../../../../../share/services/restaurant/restaurant-listing.service";

@Component({
  selector: 'app-restaurant-features',
  templateUrl: './restaurant-features.component.html',
  styleUrls: ['./restaurant-features.component.scss']
})
export class RestaurantFeaturesComponent implements OnInit {

  restaurantFeaturesForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router,private restaurantListingService: RestaurantListingService) {
    this.restaurantFeaturesForm = this.fb.group({
      paymentsArray: this.fb.array([]),
      parkingArray: this.fb.array([]),
      atmosphereArray: this.fb.array([]),
      additionalArray: this.fb.array([]),
    })
  }

  Payment: Array<any> = [
    {name: 'Accepts Credit Cards', value: 'creditCards'},
    {name: 'Accepts Discover', value: 'discover'},
    {name: 'Accepts Visa', value: 'visa'},
    {name: 'Digital Payments', value: 'digitalPayments'},
    {name: 'Accepts American Express', value: 'americanExpress'},
    {name: 'Accepts Mastercard', value: 'mastercard'},
    {name: 'Cash Only', value: 'cashOnly'},
  ]

  Parking: Array<any> = [
    {name: 'Street Parking', value: 'streetParking'},
    {name: 'Valet Parking', value: 'valetParking'},
    {name: 'Free off-street Parking', value: 'freeOffStreetParking'},
    {name: 'Validated Parking', value: 'validatedParking'},
  ]

  Atmosphere: Array<any> = [
    {name: 'Beach', value: 'beach'},
    {name: 'Television', value: 'tv'},
    {name: 'Full Bar', value: 'fullBar'},
    {name: 'Waterfront', value: 'waterfront'},
    {name: 'Jazz Bar', value: 'jazzBar'},
    {name: 'Outdoor Seating', value: 'outdoorSeating'},
    {name: 'Live Music', value: 'liveMusic'},
    {name: 'Sports Bar', value: 'sportsBar'},
    {name: 'Highchairs Available', value: 'highchairs'},
    {name: 'Playgrounds', value: 'playgrounds'},
    {name: 'Private Dining', value: 'privateDining'},
    {name: 'Seating', value: 'seating'},
    {name: 'No Smoking', value: 'noSmoking'},
  ]

  Additional: Array<any> = [
    {name: 'Delivery', value: 'delivery'},
    {name: 'Drive Thru', value: 'driveThru'},
    {name: 'Buffet', value: 'buffet'},
    {name: 'Family Style', value: 'familyStyle'},
    {name: 'Jazz Bar', value: 'jazzBar'},
    {name: 'Free Wifi', value: 'freeWifi'},
    {name: 'Serves Alcohol', value: 'alcohol'},
    {name: 'Take Out', value: 'takeOut'},
    {name: 'Wheelchair Accessible', value: 'wheelChair'},
    {name: 'Wine and Beer', value: 'wineAndBeer'},
    {name: 'BYOB', value: 'BYOB'},
    {name: 'Gift Cards Available', value: 'giftCards'},
  ]

  addToArray(e: any, type: String) {
    let array: FormArray;
    if (type == 'payment') {
      array = this.restaurantFeaturesForm.get('paymentsArray') as FormArray;
    } else if (type == 'parking') {
      array = this.restaurantFeaturesForm.get('parkingArray') as FormArray;
    } else if (type == 'atmosphere') {
      array = this.restaurantFeaturesForm.get('atmosphereArray') as FormArray;
    } else {
      array = this.restaurantFeaturesForm.get('additionalArray') as FormArray;

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

  addRestaurantFeatures() {
    let restaurantFeaturesDTO: RestaurantFeatures = new RestaurantFeatures(
      this.restaurantFeaturesForm.get('paymentsArray')?.value!,
      this.restaurantFeaturesForm.get('parkingArray')?.value!,
      this.restaurantFeaturesForm.get('atmosphereArray')?.value!,
      this.restaurantFeaturesForm.get('additionalArray')?.value!,
    )
    this.restaurantListingService.addFeaturesToRestaurant(restaurantFeaturesDTO);
    console.log(this.restaurantListingService.restaurantListDTO);
    this.router.navigate(['/console/restaurant-management/restaurant-registration/restaurant-photos']).then();

  }

  ngOnInit(): void {
  }

}
