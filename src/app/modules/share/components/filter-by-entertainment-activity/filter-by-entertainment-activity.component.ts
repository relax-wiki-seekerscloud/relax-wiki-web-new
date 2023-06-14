import {Component, OnInit} from '@angular/core';
import {LocalStorage} from "ngx-webstorage";
import {SETTINGS} from "../../settings/commons.settings";
import {MatCheckboxChange} from "@angular/material/checkbox";

@Component({
  selector: 'app-filter-by-entertainment-activity',
  templateUrl: './filter-by-entertainment-activity.component.html',
  styleUrls: ['./filter-by-entertainment-activity.component.scss']
})
export class FilterByEntertainmentActivityComponent implements OnInit {

  filterByActivities: any = [];

  @LocalStorage(SETTINGS.STORAGE.FILTER_BY_ACTIVITIES_DATA_ARR)
  filterByActivityDataArray: any;

  constructor() {
  }

  ngOnInit(): void {
    this.filterByActivityDataArray = [];
  }

  onClickEntertainmentActivity($event: MatCheckboxChange, data: string) {
    if ($event.checked) {
      this.filterByActivities.push(data);
    } else {
      const index = this.filterByActivities.indexOf(data, 0);
      if (index > -1) {
        this.filterByActivities.splice(index, 1);
      }
    }

    this.filterByActivityDataArray = this.filterByActivities;
  }

  ngOnDestroy(): void {
    this.filterByActivityDataArray = [];
  }
}
