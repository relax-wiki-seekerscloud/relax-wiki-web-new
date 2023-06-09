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
  constructor(private restaurantListingService: RestaurantListingService,private router:Router) { }

  isHovering: boolean = false;

  files: File[] = [];

  addPhoto(url: string) {
    this.restaurantPhotos.push(url);
    console.log(this.restaurantPhotos);
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
    this.restaurantListingService.addPhotosToRestaurant(this.restaurantPhotos);
    console.log(this.restaurantListingService.restaurantListDTO);
    this.router.navigate(['/console/restaurant-management/restaurant-registration/restaurant-listing-successful']).then();
  }
  ngOnInit(): void {
  }

}
