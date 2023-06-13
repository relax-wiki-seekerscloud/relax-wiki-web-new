import { Component, OnInit } from '@angular/core';
import {RequestHotelListDTO} from "../../../../../../share/dto/classes/hotel/RequestHotelListDTO";
import {FormBuilder, FormGroup} from "@angular/forms";
import {HotelListingService} from "../../../../../../share/services/hotel/hotel-listing.service";

@Component({
  selector: 'app-hotel-photos',
  templateUrl: './hotel-photos.component.html',
  styleUrls: ['./hotel-photos.component.scss']
})

export class HotelPhotosComponent implements OnInit {
  hotelPhotos: string[] = [];

constructor(private hotelListingService: HotelListingService) {
}
  isHovering: boolean = false;

  files: File[] = [];

  addPhoto(url: string) {
    this.hotelPhotos.push(url);
    console.log(this.hotelPhotos);
  }
  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      this.files.push(files.item(i));
    }
  }
  ngOnInit(): void {
  }

  addPhotosToHotel(){
    this.hotelListingService.addPhotosToHotel(this.hotelPhotos);
    console.log(this.hotelListingService.hotelListDto);
  }
}

