import { Component, OnInit } from '@angular/core';
import { Taxi } from '../../taxi-list-by-category/taxi.model';
import { TaxiService } from '../../taxi-list-by-category/taxi.service';
import { TaxiCategory } from '../../taxi-list/taxi-category.model';
import { TaxiCategoryService } from '../../taxi-list/taxi-category.service';
import { Booking } from './booking.model';
import { BookingService } from './booking.service';

import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-taxi-booking-summary',
  templateUrl: './taxi-booking-summary.component.html',
  styleUrls: ['./taxi-booking-summary.component.scss'],
})
export class TaxiBookingSummaryComponent implements OnInit {
  taxi: Taxi = null;
  taxiCategory: TaxiCategory = null;
  booking: Booking = null;
  dataLoaded: boolean = false;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private dataService: BookingService,
    private dataService2: TaxiService,
    private dataService3: TaxiCategoryService
  ) {}

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.loadData();
  }

  loadData(): void {
    this.dataService.getData(this.id).subscribe(
      (data: Booking) => {
        this.booking = data;
        this.dataService2.getData(parseInt(this.booking.vehicleId)).subscribe(
          (data: Taxi) => {
            this.taxi = data;
            this.dataService3.getData(this.taxi.category).subscribe(
              (data: TaxiCategory) => {
                this.taxiCategory = data;
                this.dataLoaded = true;
              },
              (error) => {
                console.log('Error retrieving data:', error);
              }
            );
          },
          (error) => {
            console.log('Error retrieving data:', error);
          }
        );
      },
      (error) => {
        console.log('Error retrieving data:', error);
      }
    );
  }
}
