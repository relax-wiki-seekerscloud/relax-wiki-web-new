import { Component, OnInit } from '@angular/core';
import { TaxiCategoryService } from './taxi-category.service';
import { TaxiCategory } from './taxi-category.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-taxi-list',
  templateUrl: './taxi-list.component.html',
  styleUrls: ['./taxi-list.component.scss'],
})
export class TaxiListComponent implements OnInit {
  dataList: TaxiCategory[] = [];

  constructor(
    private dataService: TaxiCategoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  goToPage(target: string) {
    this.router.navigate([target]);
  }

  loadData(): void {
    this.dataService.getAllData().subscribe(
      (data: TaxiCategory[]) => {
        this.dataList = data;
      },
      (error) => {
        console.log('Error retrieving data:', error);
      }
    );
  }
}
