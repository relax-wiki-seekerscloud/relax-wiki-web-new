import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";

interface Choice {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-hotel-payments',
  templateUrl: './hotel-payments.component.html',
  styleUrls: ['./hotel-payments.component.scss']
})
export class HotelPaymentsComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder) {}

  payments = this._formBuilder.group({
    americanExpress : false,
    visa: false,
    euroMastercard: false,
    americanExpresss : false,
    visaa: false,
    euroMastercardd: false,
  });

  choices: Choice[] = [
    {value: 'yes-1', viewValue: 'Yes'},
    {value: 'no-0', viewValue: 'No'},
  ];

  checkbox1: any;
  checkbox2: any;
  checkbox3: any;

  ngOnInit(): void {
  }

}
