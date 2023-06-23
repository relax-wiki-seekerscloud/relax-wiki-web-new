import {Component, OnDestroy, OnInit} from '@angular/core';
import {SETTINGS} from "../../../../../../share/settings/commons.settings";
import {HotelDto} from "../../../../hotel-management/dto/hotel-dto";
import {RestaurantService} from "../../../service/restaurant.service";
import {Subscription} from "rxjs";
import {RestaurantDto} from "../../../dto/restaurant-dto";

@Component({
  selector: 'app-restaurant-single-view',
  templateUrl: './restaurant-single-view.component.html',
  styleUrls: ['./restaurant-single-view.component.scss']
})
export class RestaurantSingleViewComponent implements OnInit, OnDestroy {

  restaurantDto: RestaurantDto;

  onSelectedRestaurantChangeSubs = new Subscription();

  constructor(private restaurantService: RestaurantService) {
  }

  ngOnInit(): void {
    this.onSelectedRestaurantChangeSubs = this.restaurantService.onSelectedRestaurantChange
      .subscribe((data: any) => {
        if (data.status === SETTINGS.RequestStatus.SUCCESS) {
          if (data.result) {
            this.restaurantDto = new RestaurantDto(data.result);
            console.log(this.restaurantDto);
          }
        } else if (data.status == SETTINGS.RequestStatus.FAILED) {
          data.appsErrorMessages.forEach((s: any) => {
            alert(s);
          });
        } else {
          alert('Something went wrong, Please contact administration');
        }
      });
  }

  ngOnDestroy(): void {
    this.onSelectedRestaurantChangeSubs.unsubscribe();
  }

  onMenuClick($event: MouseEvent) {
    if ($event) {
      $event.stopPropagation();
      $event.preventDefault();
    }

    alert('View Menu');
  }

  viewReviews($event: MouseEvent) {
    if ($event) {
      $event.stopPropagation();
      $event.preventDefault();
    }

    alert('View Reviews');
  }
}
