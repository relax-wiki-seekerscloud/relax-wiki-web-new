import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {RestaurantListingService} from "../../../../../../share/services/restaurant/restaurant-listing.service";
import {RestaurantMoreInfo} from "../../../../../../share/dto/classes/restaurant/RequestRestaurantListDTO";


@Component({
  selector: 'app-restaurant-more-info',
  templateUrl: './restaurant-more-info.component.html',
  styleUrls: ['./restaurant-more-info.component.scss']
})
export class RestaurantMoreInfoComponent implements OnInit {
  restaurantMoreInfo: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private router: Router, private restaurantListingService: RestaurantListingService) {
    this.restaurantMoreInfo = this.fb.group({
      restaurantCategory: new FormControl([''],[Validators.required]),
      offeredCuisineArray: this.fb.array([]),
      servedMealsArray: this.fb.array([]),
      openTimeFrom: new FormControl(['']),
      openTimeTo: new FormControl(['']),
    })
  }

  public open_from_string: String = "08:00"
  public open_to_string: String = "22:00"

  OfferedCuisine: Array<any> = [
    {name: 'Chinese', value: 'chinese'},
    {name: 'Japanese', value: 'japanese'},
    {name: 'Sri Lankan', value: 'sriLankan'},
    {name: 'Korean', value: 'korean'},
    {name: 'Indian', value: 'indian'},
    {name: 'Mongolian', value: 'mongolian'},
    {name: 'Italian', value: 'italian'},
    {name: 'American', value: 'american'},
    {name: 'Australian', value: 'australian'},
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
    if (type == 'offeredCuisine') {
      array = this.restaurantMoreInfo.get('offeredCuisineArray') as FormArray;
    } else {
      array = this.restaurantMoreInfo.get('servedMealsArray') as FormArray;
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

  addRestaurantMoreInfo() {

    let moreInfoDTO: RestaurantMoreInfo = new RestaurantMoreInfo(
      this.restaurantMoreInfo.get('offeredCuisineArray')?.value!,
      this.restaurantMoreInfo.get('servedMealsArray')?.value!,
      this.restaurantMoreInfo.get('restaurantCategory')?.value!,
      this.restaurantMoreInfo.get('openTimeFrom')?.value!,
      this.restaurantMoreInfo.get('openTimeTo')?.value!,
    )

    if (this.restaurantMoreInfo.invalid){
      this.errorMessage='Add the category of your business';
    }else {
      this.restaurantListingService.addMoreInfoToRestaurant(moreInfoDTO);
      console.log(this.restaurantListingService.restaurantListDTO);
      this.router.navigate(['/console/restaurant-management/restaurant-registration/restaurant-features']).then();
    }


  }

  get restaurantCategory(){
    return this.restaurantMoreInfo.get('restaurantCategory');
  }

  ngOnInit(): void {
  }

}
