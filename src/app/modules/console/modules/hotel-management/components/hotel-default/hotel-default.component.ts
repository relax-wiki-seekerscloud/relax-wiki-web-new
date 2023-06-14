import {Component, OnDestroy, OnInit} from '@angular/core';
import {HotelSearchService} from "../../service/hotel-search.service";
import {Subscription} from "rxjs";
import {SETTINGS} from "../../../../../share/settings/commons.settings";
import {LocalStorage} from "ngx-webstorage";
import {Router} from "@angular/router";

@Component({
  selector: 'app-hotel-default',
  templateUrl: './hotel-default.component.html',
  styleUrls: ['./hotel-default.component.scss']
})
export class HotelDefaultComponent implements OnInit, OnDestroy {

  hotelDataSource: any = [];

  onSearchHotelsSubs = new Subscription();

  hotelCondition: any = SETTINGS.HotelCondition;

  @LocalStorage(SETTINGS.STORAGE.SELECTED_HOTEL_ID)
  hotelID: any;

  constructor(private hotelSearchService: HotelSearchService,
              private router: Router) {
  }

  ngOnInit(): void {

    this.onSearchHotelsSubs = this.hotelSearchService.onSearchHotels
      .subscribe((data: any) => {
        if (data.status === SETTINGS.RequestStatus.SUCCESS) {
          this.hotelDataSource = [];
          if (data.result) {
            data.result.forEach((val: any) => {
              this.hotelDataSource.push(val);
            });
          }

          if (this.hotelDataSource.length < 1) {
            alert('No hotels found!!');
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

  onClickHotel($event: MouseEvent, hotel: any) {
    if ($event) {
      $event.stopPropagation();
      $event.preventDefault();
    }

    this.hotelID = hotel.hotelID;
    this.router.navigate(['/hotel-booking-process/hotel-single-view']);
  }

  ngOnDestroy(): void {
    this.onSearchHotelsSubs.unsubscribe();
  }
}
