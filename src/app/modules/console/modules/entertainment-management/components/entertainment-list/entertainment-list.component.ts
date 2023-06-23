import {Component, OnDestroy, OnInit} from '@angular/core';
import {SETTINGS} from "../../../../../share/settings/commons.settings";
import {Subscription} from "rxjs";
import {LocalStorage} from "ngx-webstorage";
import {Router} from "@angular/router";
import {EntertainmentSearchService} from "../../service/entertainment-search.service";

@Component({
  selector: 'app-entertainment-list',
  templateUrl: './entertainment-list.component.html',
  styleUrls: ['./entertainment-list.component.scss']
})
export class EntertainmentListComponent implements OnInit, OnDestroy {

  entertainmentDataSource: any = [];

  onSearchEntertainmentsSubs = new Subscription();

  @LocalStorage(SETTINGS.STORAGE.FILTER_BY_ACTIVITIES_DATA_ARR)
  filterByActivityDataArray: any;

  @LocalStorage(SETTINGS.STORAGE.ENTERTAINMENT_SEARCH_DATA)
  entertainmentSearchData: any;

  @LocalStorage(SETTINGS.STORAGE.SELECTED_ENTERTAINMENT_ID)
  entertainmentID: any;

  @LocalStorage(SETTINGS.STORAGE.SELECTED_ENTERTAINMENT_DATA_FOR_BOOKING)
  selectedEntertainment: any;

  @LocalStorage(SETTINGS.STORAGE.FILTER_BY_BUDGET_DATA_ARR)
  filterByBudgetDataArray: any;

  @LocalStorage(SETTINGS.STORAGE.FILTER_BY_RATINGS_DATA_ARR)
  filterByRatingsDataArray: any;

  constructor(private router: Router,
              private entertainmentSearchService: EntertainmentSearchService) {
  }

  ngOnInit(): void {
    this.onSearchEntertainmentsSubs = this.entertainmentSearchService.onSearchEntertainments
      .subscribe((data: any) => {
        if (data.status === SETTINGS.RequestStatus.SUCCESS) {
          this.entertainmentDataSource = [];
          if (data.result) {
            data.result.forEach((val: any) => {
              this.entertainmentDataSource.push(val);
            });

            if (this.entertainmentDataSource.length < 1) {
              alert('No entertainment found!!');
            }
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
    this.onSearchEntertainmentsSubs.unsubscribe();
  }

  onBookEntertainment(entertainment: any) {
    this.selectedEntertainment = entertainment;
    this.router.navigate(['/entertainment-management/entertainment-booking']);
  }

  onSearchEntertainments() {
    this.entertainmentSearchData.filterByBudgetArr = this.filterByBudgetDataArray;
    this.entertainmentSearchData.filterByRatingsArr = this.filterByRatingsDataArray;
    this.entertainmentSearchData.filterByActivityArr = this.filterByActivityDataArray;

    this.entertainmentSearchService.searchEntertainments({});
  }
}
