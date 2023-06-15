import {Injectable} from '@angular/core';
import {RequestHotelListDTO, Room, Policy} from "../../dto/classes/hotel/RequestHotelListDTO";
import {Observable} from "rxjs";
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HotelListingService {

  constructor(private http: HttpClient) {
  }

  hotelListDTO: RequestHotelListDTO | undefined;

  addDataToHotelListDTO(tempHotelListDTO: RequestHotelListDTO) {
    this.hotelListDTO = tempHotelListDTO;
    console.log(this.hotelListDTO)
  }

  addRoomToHotel(room: Room) {
    if (this.hotelListDTO)
      this.hotelListDTO.rooms.push(room);
  }

  addFacilitiesToHotel(facilities: Array<string>) {
    if (this.hotelListDTO)
      this.hotelListDTO.facilities = facilities;
  }

  addServicesToHotel(services: Array<string>) {
    if (this.hotelListDTO)
      this.hotelListDTO.services = services;
  }

  addLanguagesToHotel(languages: Array<string>) {
    if (this.hotelListDTO)
      this.hotelListDTO.languages = languages;
  }

  addAmenitiesToHotel(amenities: Array<string>) {
    if (this.hotelListDTO)
      this.hotelListDTO.mostCommonAmenities = amenities;
  }

  addRoomAmenitiesToHotel(roomAmenities: Array<string>) {
    if (this.hotelListDTO)
      this.hotelListDTO.roomAmenities = roomAmenities;
  }

  addFoodAndDrinkAmenitiesToHotel(foodAndDrinkAmenities: Array<string>) {
    if (this.hotelListDTO)
      this.hotelListDTO.foodAndDrinkAmenities = foodAndDrinkAmenities;
  }

  addEntertainmentAndFamilyServicesAmenitiesToHotel(entertainmentAndFamilyServicesAmenities: Array<string>) {
    if (this.hotelListDTO)
      this.hotelListDTO.entertainmentAndFamilyServicesAmenities = entertainmentAndFamilyServicesAmenities;
  }

  addMediaAndTechnologyAmenitiesToHotel(mediaAndTechnologyAmenities: Array<string>) {
    if (this.hotelListDTO)
      this.hotelListDTO.mediaAndTechnologyAmenities = mediaAndTechnologyAmenities;
  }

  addBathroomAmenitiesToHotel(bathroomAmenities: Array<string>) {
    if (this.hotelListDTO)
      this.hotelListDTO.bathroomAmenities = bathroomAmenities;
  }

  addRoomAccessibilityAmenitiesToHotel(roomAccessibilityAmenities: Array<string>) {
    if (this.hotelListDTO)
      this.hotelListDTO.roomAccessibilityAmenities = roomAccessibilityAmenities;
  }

  addSafetyAndSecurityAmenitiesToHotel(safetyAndSecurityAmenities: Array<string>) {
    if (this.hotelListDTO)
      this.hotelListDTO.safetyAndSecurityAmenities = safetyAndSecurityAmenities;
  }

  addOutdoorAmenitiesToHotel(outdoorAmenities: Array<string>) {
    if (this.hotelListDTO)
      this.hotelListDTO.outdoorAmenities = outdoorAmenities;
  }

  addServicesAndExtrasAmenitiesToHotel(servicesAndExtrasAmenities: Array<string>) {
    if (this.hotelListDTO)
      this.hotelListDTO.servicesAndExtrasAmenities = servicesAndExtrasAmenities;
  }

  get hotelListDto() {
    return this.hotelListDTO;
  }

  addPhotosToHotel(photos: Array<string>) {
    if (this.hotelListDTO)
      this.hotelListDTO.photoUrls = photos;
  }

  addPolicyToHotel(policy: Policy) {
    if (this.hotelListDTO) {
      this.hotelListDTO.pets = policy.pets == "allowed"? true:false;
      this.hotelListDTO.petsCharge = policy.petsCharge;
      this.hotelListDTO.bookingCancelPeriod = policy.bookingCancelPeriod;
      this.hotelListDTO.bookingCancelCharge = policy.bookingCancelCharge;
      this.hotelListDTO.checkInTimeFrom = policy.checkInTimeFrom;
      this.hotelListDTO.checkInTimeTo = policy.checkInTimeTo;
      this.hotelListDTO.checkOutTimeFrom = policy.checkOutTimeFrom;
      this.hotelListDTO.checkOutTimeTo = policy.checkOutTimeTo;
    }
  }

  addPaymentDetails(payment: Array<string>) {
    if (this.hotelListDTO)
      this.hotelListDTO.paymentMethods = payment;
  }

  postHotelListing(requestHotelListDTO: RequestHotelListDTO): Observable<any> {
    console.log(requestHotelListDTO);
    return this.http.post('http://localhost:8080/api/hotelDetails/add-new-hotel', requestHotelListDTO);
  }
}
