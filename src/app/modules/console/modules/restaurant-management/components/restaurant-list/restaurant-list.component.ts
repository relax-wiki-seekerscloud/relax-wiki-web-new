import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {SETTINGS} from "../../../../../share/settings/commons.settings";
import {RestaurantSearchService} from "../../service/restaurant-search.service";
import {Subscription} from "rxjs";
import {LocalStorage} from "ngx-webstorage";

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss']
})
export class RestaurantListComponent implements OnInit, OnDestroy {

  restaurantDataSource: any = [];

  onSearchRestaurantSubs = new Subscription();

  restaurantCondition: any = SETTINGS.HotelCondition;

  @LocalStorage(SETTINGS.STORAGE.SELECTED_RESTAURANT_ID)
  restaurantID: any;

  @LocalStorage(SETTINGS.STORAGE.RESTAURANT_SEARCH_DATA)
  restaurantSearchData: any;

  @LocalStorage(SETTINGS.STORAGE.FILTER_BY_RATINGS_DATA_ARR)
  filterByRatingsDataArray: any;

  constructor(private router: Router,
              private restaurantSearchService: RestaurantSearchService) {
  }

  ngOnInit(): void {
    this.onSearchRestaurantSubs = this.restaurantSearchService.onSearchRestaurants
      .subscribe((data: any) => {
        if (data.status === SETTINGS.RequestStatus.SUCCESS) {
          this.restaurantDataSource = [];
          if (data.result) {
            data.result.forEach((val: any) => {
              this.restaurantDataSource.push(val);
            });
          }
          if (this.restaurantDataSource.length < 1) {
            alert('No restaurant founds!!')
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
    this.onSearchRestaurantSubs.unsubscribe();
  }

  onClickRestaurants($event: MouseEvent, restaurant: any) {
    if ($event) {
      $event.stopPropagation();
      $event.preventDefault();
    }

    this.restaurantID = restaurant.restaurantID;

    this.router.navigate(['/restaurant-booking-process/restaurant-single-view']);
  }

  onMenuClick($event: MouseEvent, restaurant: any) {
    if ($event) {
      $event.stopPropagation();
      $event.preventDefault();
    }

    console.log(restaurant);
  }

  onSearchRestaurants() {
    this.restaurantSearchData.filterByRatingsArr = this.filterByRatingsDataArray;
    this.restaurantSearchService.searchRestaurants({});
  }
}
