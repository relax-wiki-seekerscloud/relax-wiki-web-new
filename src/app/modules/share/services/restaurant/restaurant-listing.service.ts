import {Injectable} from '@angular/core';
import {
  RequestRestaurantListDTO,
  RestaurantFeatures,
  RestaurantMoreInfo
} from "../../dto/classes/restaurant/RequestRestaurantListDTO";
import {HttpClient} from "@angular/common/http";
import {Policy, RequestHotelListDTO} from "../../dto/classes/hotel/RequestHotelListDTO";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RestaurantListingService {

  constructor(private http: HttpClient) {
  }

  restaurantListDTO: RequestRestaurantListDTO | undefined;

  addDataToRestaurantListDTO(tempRestaurantListDTO: RequestRestaurantListDTO) {
    this.restaurantListDTO = tempRestaurantListDTO;
    console.log(this.restaurantListDTO)
  }

  addMoreInfoToRestaurant(moreInfo: RestaurantMoreInfo) {
    if (this.restaurantListDTO)
      this.restaurantListDTO.offeredCuisine = moreInfo.offeredCuisine;
      this.restaurantListDTO.mealsServed = moreInfo.mealsServed;
      this.restaurantListDTO.restaurantCategory = moreInfo.restaurantCategory;
      this.restaurantListDTO.openTimeFrom = moreInfo.openTimeFrom;
      this.restaurantListDTO.openTimeTo = moreInfo.openTimeTo;
  }

  addFeaturesToRestaurant(restaurantFeatures: RestaurantFeatures) {
    if (this.restaurantListDTO)
      this.restaurantListDTO.paymentMethods = restaurantFeatures.paymentMethods;
      this.restaurantListDTO.parking = restaurantFeatures.parking;
      this.restaurantListDTO.atmosphere = restaurantFeatures.atmosphere;
      this.restaurantListDTO.additional = restaurantFeatures.additional;
  }

  addPhotosToRestaurant(photos: Array<string>) {
    if (this.restaurantListDTO)
      this.restaurantListDTO.photoUrls = photos;
  }

  postRestaurantListing(requestRestaurantListCTO: RequestRestaurantListDTO): Observable<any> {
    console.log("hi")
    console.log(requestRestaurantListCTO);
    return this.http.post('http://localhost:8080/api/restaurantDetails/add-new-restaurant', requestRestaurantListCTO);
  }
}
