import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {RestaurantListingService} from "../../../../../../share/services/restaurant/restaurant-listing.service";
import {RequestRestaurantListDTO} from "../../../../../../share/dto/classes/restaurant/RequestRestaurantListDTO";

@Component({
  selector: 'app-restaurant-basic-info',
  templateUrl: './restaurant-basic-info.component.html',
  styleUrls: ['./restaurant-basic-info.component.scss']
})
export class RestaurantBasicInfoComponent implements OnInit {

  restaurantListingForm = new FormGroup({
    restaurantName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    restaurantDesc: new FormControl(''),
    contactPersonName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    streetAddress: new FormControl('', [Validators.required]),
    addressLine2: new FormControl(''),
    country: new FormControl(''),
    city: new FormControl('',[Validators.required]),
    postalCode: new FormControl(''),
  });

  constructor(private router:Router, private restaurantListingService: RestaurantListingService) {
  }


  addDataToRestaurantDTO(){
    let tempRestaurantListDTO: RequestRestaurantListDTO = new RequestRestaurantListDTO(
      this.restaurantListingForm.get('restaurantName')?.value!,
      this.restaurantListingForm.get('restaurantDesc')?.value!,
      this.restaurantListingForm.get('contactPersonName')?.value!,
      this.restaurantListingForm.get('streetAddress')?.value!,
      this.restaurantListingForm.get('addressLine2')?.value!,
      this.restaurantListingForm.get('country')?.value!,
      this.restaurantListingForm.get('city')?.value!,
      this.restaurantListingForm.get('postalCode')?.value!
    )

    this.restaurantListingService.addDataToRestaurantListDTO(tempRestaurantListDTO);
    this.router.navigate(['/console/restaurant-management/restaurant-registration/restaurant-more-info']).then();
  }
  ngOnInit(): void {
  }

}
