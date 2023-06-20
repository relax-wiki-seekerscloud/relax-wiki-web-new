import { Component, OnInit } from '@angular/core';
import {HotelListingService} from "../../../../../../share/services/hotel/hotel-listing.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-room-count',
  templateUrl: './hotel-room-count.component.html',
  styleUrls: ['./hotel-room-count.component.scss']
})
export class HotelRoomCountComponent implements OnInit {

  constructor(private router:Router, private hotelListingService: HotelListingService) { }

  ngOnInit(): void {
  }


  addRooms(){
    this.router.navigate(['/console/hotel-management/hotel-registration/hotel-room-description']).then();
  }
  continue(){
    this.router.navigate(['/console/hotel-management/hotel-registration/hotel-facilities']).then();
  }
  get numberOfRooms(){
    return this.hotelListingService.hotelListDTO?.rooms.length || 0;
  }
  get rooms(){
    return this.hotelListingService.hotelListDTO?.rooms || [];
  }
}
