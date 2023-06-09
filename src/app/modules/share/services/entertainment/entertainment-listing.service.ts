import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {
  EntertainmentFacilities,
  EntertainmentMoreInfo, EntertainmentPolicy,
  RequestEntertainmentListDTO
} from "../../dto/classes/entertainment/RequestEntertainmentListDTO";
import {RequestRestaurantListDTO, RestaurantMoreInfo} from "../../dto/classes/restaurant/RequestRestaurantListDTO";

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
      this.entertainmentListDTO.entertainmentMoreInfo.push(moreInfo);
  }

  addFacilitiesToEntertainment(entertainmentFacility:EntertainmentFacilities){
    if (this.entertainmentListDTO)
      this.entertainmentListDTO.entertainmentFacilities.push(entertainmentFacility);
  }

  addPhotosToEntertainment(photos:Array<string>){
    if (this.entertainmentListDTO)
      this.entertainmentListDTO.entertainmentPhotosUrl=photos;
  }

  addPolicyToEntertainment(entertainmentPolicy:EntertainmentPolicy){
    if (this.entertainmentListDTO)
      this.entertainmentListDTO.entertainmentPolicies.push(entertainmentPolicy);
  }
}
