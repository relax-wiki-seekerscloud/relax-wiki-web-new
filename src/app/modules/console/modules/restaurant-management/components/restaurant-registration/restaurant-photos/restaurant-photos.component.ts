import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {RestaurantListingService} from "../../../../../../share/services/restaurant/restaurant-listing.service";

@Component({
  selector: 'app-restaurant-photos',
  templateUrl: './restaurant-photos.component.html',
  styleUrls: ['./restaurant-photos.component.scss']
})
export class RestaurantPhotosComponent implements OnInit {
  restaurantPhotos: string[] = [];
  errorMessage: string = '';
  constructor(private restaurantListingService: RestaurantListingService,private router:Router) { }

  isHovering: boolean = false;

  files: File[] = [];

  addPhoto(url: string) {
    this.restaurantPhotos.push(url);
    console.log(this.restaurantPhotos);
  }
  removePhoto(data:any) {
    this.restaurantPhotos = this.restaurantPhotos.filter(item => item !== data.url);
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

  addPhotosToRestaurant(){
    // if (this.hotelPhotos.length>0){
    this.restaurantListingService.addPhotosToRestaurant(this.restaurantPhotos);
    console.log(this.restaurantListingService.restaurantListDTO);
    const result = this.restaurantListingService.postRestaurantListing(this.restaurantListingService.restaurantListDTO);
    result.subscribe((res)=>console.log(res))
    this.router.navigate(['/console/restaurant-management/restaurant-registration/restaurant-listing-successful']).then();
    // }else {
    //   this.errorMessage="Please add at least one photo of your property";
  }
  ngOnInit(): void {
  }

}
