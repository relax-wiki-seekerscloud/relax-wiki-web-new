import {Component, Input, OnInit} from '@angular/core';
import {RequestHotelListDTO, Room} from "../../dto/classes/hotel/RequestHotelListDTO";
import {HotelListingService} from "../../services/hotel/hotel-listing.service";

@Component({
  selector: 'app-hotel-room-container-box',
  templateUrl: './hotel-room-container-box.component.html',
  styleUrls: ['./hotel-room-container-box.component.scss']
})
export class HotelRoomContainerBoxComponent implements OnInit {
   rooms: Room[];
  constructor(private hotelListingService: HotelListingService) {
    this.rooms = this.hotelListingService.hotelListDTO?.rooms || [];
  }

  ngOnInit(): void {
  }
  printHello(){
    console.log("hi")
    console.log(this.rooms);
  }
  deleteRoom(index:number){
    this.hotelListingService.hotelListDTO?.rooms.splice(index,1);
    this.rooms = this.hotelListingService.hotelListDTO?.rooms || [];
  }
  getRoomName(index:number){
    const text = this.rooms[index].roomName;
    const result = text.replace(/([A-Z])/g, " $1");
    return result.charAt(0).toUpperCase() + result.slice(1);
  }

}
