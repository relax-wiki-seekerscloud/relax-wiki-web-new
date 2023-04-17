import { Component, OnInit } from '@angular/core';
import {RequestHotelListDTO} from "../../dto/classes/hotel/RequestHotelListDTO";

@Component({
  selector: 'app-hotel-room-container-box',
  templateUrl: './hotel-room-container-box.component.html',
  styleUrls: ['./hotel-room-container-box.component.scss']
})
export class HotelRoomContainerBoxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  printHello(){
    console.log(RequestHotelListDTO)
  }
}
