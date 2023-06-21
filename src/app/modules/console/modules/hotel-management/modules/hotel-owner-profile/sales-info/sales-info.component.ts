import { Component, OnInit } from '@angular/core';
import {ChartConfiguration, ChartOptions} from "chart.js";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-sales-info',
  templateUrl: './sales-info.component.html',
  styleUrls: ['./sales-info.component.scss']
})
export class SalesInfoComponent implements OnInit{
  private hotelID = 'H007';
  constructor(private http:HttpClient) { }

  title = 'ng2-charts-demo';

  public barChartLegend = true;
  //@ts-ignore
  public barChartPlugins = [];

  //@ts-ignore
  public totlBookings= [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Bookings'
      }
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
  };


  //--------------------line-chart-------------------------

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: [
      {
        data:[9,10,8,7,1,9,1],
        label: 'Income',
        fill: false,
        tension:0,
        borderColor: 'pink',
      }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true
  };
  public lineChartLegend = true;

  ngOnInit(): void {

    const currentDate = new Date();
    const labels = [];
    for (let i = 1; i <= 7; i++) {
      const date = new Date(currentDate.getTime() - i * 24 * 60 * 60 * 1000);
      labels.unshift(date.getDate().toString());
    }
    this.barChartData.labels = labels;
    this.lineChartData.labels = labels;

    this.http
      .get<any>(
        `http://localhost:8080/api/bookings/getListOfBookingsOfGivenHotel/${this.hotelID}`
      )
      .subscribe((data) => {
        this.barChartData.datasets[0].data = data;
      });
  }



}
