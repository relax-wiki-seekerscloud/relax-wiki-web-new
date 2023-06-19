import { Component, OnInit } from '@angular/core';
import {ChartConfiguration, ChartOptions} from "chart.js";

@Component({
  selector: 'app-sales-info',
  templateUrl: './sales-info.component.html',
  styleUrls: ['./sales-info.component.scss']
})
export class SalesInfoComponent  {
  constructor() { }

  title = 'ng2-charts-demo';

  public barChartLegend = true;
  //@ts-ignore
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [ '23', '24', '25' ,'26', '27', '28', '29'],
    datasets: [
      {
        data: [ 65, 59, 80, 81, 56, 55, 40 ],
        label: 'Bookings'
      }
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
  };


  //--------------------line-chart-------------------------

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [ '23', '24', '25' ,'26', '27', '28', '29'],
    datasets: [
      {
        data: [ 65, 59, 80, 81, 56, 55, 40 ],
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



}
