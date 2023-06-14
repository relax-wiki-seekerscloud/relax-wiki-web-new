import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatCheckboxChange} from "@angular/material/checkbox";
import {LocalStorage} from "ngx-webstorage";
import {SETTINGS} from "../../settings/commons.settings";

@Component({
  selector: 'app-filter-by-budget',
  templateUrl: './filter-by-budget.component.html',
  styleUrls: ['./filter-by-budget.component.scss']
})
export class FilterByBudgetComponent implements OnInit, OnDestroy {

  filterByBudget: any = [];

  @LocalStorage(SETTINGS.STORAGE.FILTER_BY_BUDGET_DATA_ARR)
  filterByBudgetDataArray: any;

  budget: string;

  constructor() {
  }

  ngOnInit(): void {
    this.filterByBudgetDataArray = [];
  }

  ngOnDestroy(): void {
    this.filterByBudgetDataArray = [];
  }

  onClickRadio($event: MouseEvent, data: string) {
    this.filterByBudget = [];
    this.filterByBudget.push(data);
    this.filterByBudgetDataArray = this.filterByBudget;
  }
}
