import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {
  EntertainmentFacilities,
  EntertainmentMoreInfo, EntertainmentPolicy,
  RequestEntertainmentListDTO
} from "../../dto/classes/entertainment/RequestEntertainmentListDTO";
import {RequestRestaurantListDTO, RestaurantMoreInfo} from "../../dto/classes/restaurant/RequestRestaurantListDTO";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EntertainmentListingService {

  constructor(private http: HttpClient) {
  }

  entertainmentListDTO: RequestEntertainmentListDTO | undefined;

  addDataToEntertainmentListDTO(tempEntertainmentListDTO: RequestEntertainmentListDTO) {
    this.entertainmentListDTO = tempEntertainmentListDTO;
    console.log(this.entertainmentListDTO);
  }

  addMoreInfoToEntertainment(moreInfo: EntertainmentMoreInfo) {
    if (this.entertainmentListDTO)
      this.entertainmentListDTO.transportationMethods = moreInfo.transportationMethods;
      this.entertainmentListDTO.mealsProvided = moreInfo.mealsProvided;
      this.entertainmentListDTO.entertainmentCategory = moreInfo.entertainmentCategory;
      this.entertainmentListDTO.openTimeFrom = moreInfo.openTimeFrom;
      this.entertainmentListDTO.openTimeTo = moreInfo.openTimeTo;
      this.entertainmentListDTO.lowestRateForOnePerson = moreInfo.lowestRateForOnePerson;
  }

  addFacilitiesToEntertainment(entertainmentFacility: EntertainmentFacilities) {
    if (this.entertainmentListDTO)
      this.entertainmentListDTO.facilities = entertainmentFacility.facilities;
      this.entertainmentListDTO.activities = entertainmentFacility.activities;
      this.entertainmentListDTO.packages = entertainmentFacility.packages;
      this.entertainmentListDTO.languages = entertainmentFacility.languages;
  }

  addPhotosToEntertainment(photos: Array<string>) {
    if (this.entertainmentListDTO)
      this.entertainmentListDTO.photoUrls = photos;
  }

  addPolicyToEntertainment(entertainmentPolicy: EntertainmentPolicy) {
    if (this.entertainmentListDTO)
      this.entertainmentListDTO.bookingCancelCharge = entertainmentPolicy.bookingCancelCharge;
      this.entertainmentListDTO.bookingCancelPeriod = entertainmentPolicy.bookingCancelPeriod;
      this.entertainmentListDTO.paymentMethods = entertainmentPolicy.paymentMethods;

  }

  postEntertainmentListing(requestEntertainmentListDTO: RequestEntertainmentListDTO): Observable<any> {
    console.log("hi")
    console.log(requestEntertainmentListDTO);
    return this.http.post('http://localhost:8080/api/activityDetails/add-new-activity', requestEntertainmentListDTO);
  }
}
