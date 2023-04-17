import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RequestHotelListDTO, Room} from "../../dto/classes/hotel/RequestHotelListDTO";

@Injectable({
  providedIn: 'root'
})
export class HotelListingService {

  hotelListDTO: RequestHotelListDTO | undefined;
  addDataToHotelListDTO(tempHotelListDTO:RequestHotelListDTO){
   this.hotelListDTO= tempHotelListDTO;
   console.log(this.hotelListDTO)
  }

  addRoomToHotel(room:Room){
    if(this.hotelListDTO)
      this.hotelListDTO.rooms.push(room);
  }

}
