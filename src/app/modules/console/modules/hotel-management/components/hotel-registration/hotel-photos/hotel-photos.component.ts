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
  errorMessage: string = '';

constructor(private hotelListingService: HotelListingService,private router:Router) {
}
  isHovering: boolean = false;

  files: File[] = [];

  addPhoto(url: string) {
    this.hotelPhotos.push(url);
    console.log(this.hotelPhotos);
  }
  removePhoto(data:any) {
    this.hotelPhotos = this.hotelPhotos.filter(item => item !== data.url);
    this.files = this.files.filter(item => item !== data.file);
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
    // if (this.hotelPhotos.length>0){
      this.hotelListingService.addPhotosToHotel(this.hotelPhotos);
      console.log(this.hotelListingService.hotelListDto);
      this.router.navigate(['/console/hotel-management/hotel-registration/hotel-policy']).then();
    // }else {
    //   this.errorMessage="Please add at least one photo of your property";
    }

  }


