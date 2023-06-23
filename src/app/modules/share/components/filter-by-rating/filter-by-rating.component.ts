import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatCheckboxChange} from "@angular/material/checkbox";
import {LocalStorage} from "ngx-webstorage";
import {SETTINGS} from "../../settings/commons.settings";

@Component({
  selector: 'app-filter-by-rating',
  templateUrl: './filter-by-rating.component.html',
  styleUrls: ['./filter-by-rating.component.scss']
})
export class FilterByRatingComponent implements OnInit, OnDestroy {

  filterByRatings: any = [];

  @LocalStorage(SETTINGS.STORAGE.FILTER_BY_RATINGS_DATA_ARR)
  filterByRatingsDataArray: any;

  constructor() {
  }

  ngOnInit(): void {
    this.filterByRatingsDataArray = [];
  }

  onClickRatingLevel($event: MatCheckboxChange, data: string) {
    if ($event.checked) {
      this.filterByRatings.push(data);
    } else {
      const index = this.filterByRatings.indexOf(data, 0);
      if (index > -1) {
        this.filterByRatings.splice(index, 1);
      }
    }

    this.filterByRatingsDataArray = this.filterByRatings;
  }

  ngOnDestroy(): void {
    this.filterByRatingsDataArray = [];
  }
}
