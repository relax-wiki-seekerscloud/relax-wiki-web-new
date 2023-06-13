import { Component, OnInit } from '@angular/core';

interface Day {
  value: string;
  viewValue: string;
}
interface Pay {
  value: string;
  viewValue: string;
}
interface Pet {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-hotel-policy',
  templateUrl: './hotel-policy.component.html',
  styleUrls: ['./hotel-policy.component.scss']
})

export class HotelPolicyComponent implements OnInit {
  // selected='day-1';
  days: Day[] = [
    {value: 'day-1', viewValue: '1 day'},
    {value: 'day-2', viewValue: '2 days'},
    {value: 'day-3', viewValue: '3 days'},
  ];

  stays: Pay[] = [
    {value: 'full', viewValue: '100% of the full stay'},
    {value: 'half', viewValue: '50% of the full stay'},
    {value: 'quarter', viewValue: '25% of the full stay'},
  ];

  pets: Pet[] = [
    {value: 'yes-1', viewValue: 'Yes'},
    {value: 'no-0', viewValue: 'No'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
