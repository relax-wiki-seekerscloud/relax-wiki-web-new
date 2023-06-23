import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaxiService } from './taxi.service';
import { Taxi } from './taxi.model';
import { TaxiCategory } from '../taxi-list/taxi-category.model';
import { TaxiCategoryService } from '../taxi-list/taxi-category.service';

@Component({
  selector: 'app-taxi-list-by-category',
  templateUrl: './taxi-list-by-category.component.html',
  styleUrls: ['./taxi-list-by-category.component.scss'],
})
export class TaxiListByCategoryComponent implements OnInit {
  id: number;
  dataList: Taxi[] = [];
  dataLoaded: boolean = false;
  category: TaxiCategory = null;

  constructor(
    private dataService: TaxiService,
    private dataService2: TaxiCategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.loadData();
  }

  goToPage(target: string) {
    this.router.navigate([target]);
  }

  loadData(): void {
    this.dataService2.getData(this.id).subscribe(
      (data: TaxiCategory) => {
        this.category = data;
        this.dataLoaded = true;
      },
      (error) => {
        console.log('Error retrieving data:', error);
      }
    );

    this.dataService.getAllData(this.id).subscribe(
      (data: Taxi[]) => {
        this.dataList = data;
      },
      (error) => {
        console.log('Error retrieving data:', error);
      }
    );
  }
}
