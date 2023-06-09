import { Component, OnInit } from '@angular/core';
import {HotelListingService} from "../../../../../../share/services/hotel/hotel-listing.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-hotel-photos',
  templateUrl: './hotel-photos.component.html',
  styleUrls: ['./hotel-photos.component.scss']
})

export class HotelPhotosComponent implements OnInit {
  hotelPhotos: string[] = [];

constructor(private hotelListingService: HotelListingService,private router:Router) {
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
    this.router.navigate(['/console/hotel-management/hotel-registration/hotel-policy']).then();
  }
}

