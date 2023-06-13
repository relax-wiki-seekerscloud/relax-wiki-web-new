import { Injectable } from '@angular/core';
import {
  RequestRestaurantListDTO,
  RestaurantFeatures,
  RestaurantMoreInfo
} from "../../dto/classes/restaurant/RequestRestaurantListDTO";
import {HttpClient} from "@angular/common/http";
import {Policy} from "../../dto/classes/hotel/RequestHotelListDTO";

@Injectable({
  providedIn: 'root'
})
export class RestaurantListingService {

  constructor(private http: HttpClient) { }
  restaurantListDTO: RequestRestaurantListDTO | undefined;

  addDataToRestaurantListDTO(tempRestaurantListDTO: RequestRestaurantListDTO) {
    this.restaurantListDTO = tempRestaurantListDTO;
    console.log(this.restaurantListDTO)
  }

  addMoreInfoToRestaurant(moreInfo: RestaurantMoreInfo) {
    if (this.restaurantListDTO)
      this.restaurantListDTO.restaurantMoreInfo.push(moreInfo);
  }

  addFeaturesToRestaurant(restaurantFeatures:RestaurantFeatures){
    if (this.restaurantListDTO)
      this.restaurantListDTO.restaurantFeatures.push(restaurantFeatures);
  }

  addPhotosToRestaurant(photos: Array<string>) {
    if (this.restaurantListDTO)
      this.restaurantListDTO.photos = photos;
  }
}
