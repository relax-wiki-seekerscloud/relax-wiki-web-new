import { Component, OnInit } from '@angular/core';
import {HotelListingService} from "../../../../../../share/services/hotel/hotel-listing.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {RequestHotelListDTO, Room} from "../../../../../../share/dto/classes/hotel/RequestHotelListDTO";

interface RoomType {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-room-description',
  templateUrl: './hotel-room-description.component.html',
  styleUrls: ['./hotel-room-description.component.scss']
})
export class HotelRoomDescriptionComponent implements OnInit {

  roomInformation = new FormGroup({
    roomType:new FormControl(''),
    roomName:new FormControl(''),
    roomSize:new FormControl(''),
    customRoomName:new FormControl('')
  });

  constructor(private router:Router, private hotelListingService: HotelListingService) {

  }


  addRoomInformation(){
    let roomDTO: Room = new Room(
      this.roomInformation.get('roomType')?.value!,
      this.roomInformation.get('roomName')?.value!
    )

    this.hotelListingService.addRoomToHotel(roomDTO);

    this.router.navigate(['/console/hotel-management/hotel-registration/hotel-room-count']).then();
  }





  roomTypes: RoomType[] = [
    {value: 'single', viewValue: 'single'},
    {value: 'double', viewValue: 'double'},
    {value: 'twin', viewValue: 'twin'},
    {value: 'triple', viewValue: 'triple'},
  ];
  ngOnInit(): void {
  }

}
