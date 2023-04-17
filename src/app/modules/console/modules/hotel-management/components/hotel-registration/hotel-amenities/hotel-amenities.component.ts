import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-hotel-amenities',
  templateUrl: './hotel-amenities.component.html',
  styleUrls: ['./hotel-amenities.component.scss']
})
export class HotelAmenitiesComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder) {}
  commonAmenities = this._formBuilder.group({
    ac : false,
    electricKettle: false,
    bath: false,
    balcony:false,
    spaBath:false,
    view:false,
    screenTV:false,
    terrace:false,
  });

  ngOnInit(): void {
  }

}
