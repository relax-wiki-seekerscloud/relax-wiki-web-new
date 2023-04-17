import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import iso6391 from 'iso-639-1';

@Component({
  selector: 'app-hotel-facilities',
  templateUrl: './hotel-facilities.component.html',
  styleUrls: ['./hotel-facilities.component.scss']
})
export class HotelFacilitiesComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder) {}

  facilities = this._formBuilder.group({
    wifi : false,
    spaAndWellness: false,
    swimmingPool: false,
    parking:false,
    breakfast:false,
    sauna:false,
    tennisCourt:false,
    banquetFacilities:false,
    bar:false,
    fitnessCenter:false,
    laundry:false,
    lounge:false,
  });

  services = this._formBuilder.group({
    petFriendly : false,
    ironingService: false,
    babysitting: false,
    courier:false,
    turnDownService:false,
    security:false,
    roomService:false,
    banquet:false,
    shoeshine:false,
    conference:false,
    laundry:false,
    lounge:false,
  });

  get selectedLanguage(): string {
    return <string>this._selectedLanguage;
  }

  set selectedLanguage(value: string) {
    this._selectedLanguage = value;
  }

  languages = iso6391.getAllNames().map(name => {
    return { name: name, code: iso6391.getCode(name) };
  });

  private _selectedLanguage: string | undefined;
  ngOnInit(): void {
  }

}
