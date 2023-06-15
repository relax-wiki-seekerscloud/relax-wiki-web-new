import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators, AbstractControl } from '@angular/forms';
import iso6391 from 'iso-639-1';
import {Router} from "@angular/router";
import {HotelListingService} from "../../../../../../share/services/hotel/hotel-listing.service";
import {RequestHotelListDTO} from "../../../../../../share/dto/classes/hotel/RequestHotelListDTO";

@Component({
  selector: 'app-hotel-facilities',
  templateUrl: './hotel-facilities.component.html',
  styleUrls: ['./hotel-facilities.component.scss']
})
export class HotelFacilitiesComponent implements OnInit {

  languageOptions: string[] = iso6391.getAllNames();
  hotelFacilityForm: FormGroup;

  constructor(private fb: FormBuilder,private router:Router, private hotelListingService: HotelListingService) {
    this.hotelFacilityForm = this.fb.group({
      facilitiesArray: this.fb.array([],[Validators.required]),
      servicesArray: this.fb.array([],[Validators.required]),
      languageControl: new FormControl([]),
    })
  }

  Facility: Array<any> = [
    {name: 'Wi-Fi', value: 'wifi'},
    {name: 'Spa And Wellness', value: 'spaAndWellness'},
    {name: 'Swimming Pool', value: 'swimmingPool'},
    {name: 'Parking', value: 'parking'},
    {name: 'Breakfast', value: 'breakfast'},
    {name: 'Sauna', value: 'sauna'},
    {name: 'Tennis Court', value: 'tennisCourt'},
    {name: 'Banquet Facilities', value: 'banquetFacilities'},
    {name: 'Bar', value: 'bar'},
    {name: 'Fitness Center', value: 'fitnessCenter'},
    {name: 'Laundry', value: 'laundry'},
    {name: 'Lounge', value: 'lounge'},
  ];

  Service: Array<any> = [
    {name: 'Pet Friendly', value: 'petFriendly'},
    {name: 'Ironing Service', value: 'ironingService'},
    {name: 'Baby Sitting', value: 'babysitting'},
    {name: 'Courier', value: 'courier'},
    {name: 'Turn Down Service', value: 'turnDownService'},
    {name: 'Security', value: 'security'},
    {name: 'Room Service', value: 'roomService'},
    {name: 'Banquet', value: 'banquet'},
    {name: 'Shoe Shine', value: 'shoeshine'},
    {name: 'Conference', value: 'conference'},
    {name: 'Laundry', value: 'laundry'},
    {name: 'Lounge', value: 'lounge'},
  ];

  addToArray(e: any, type: String) {
    let array: FormArray;
    if (type == 'facility') {
      array = this.hotelFacilityForm.get('facilitiesArray') as FormArray;
    } else {
      array = this.hotelFacilityForm.get('servicesArray') as FormArray;
    }
    if (e?.checked) {
      array.push(new FormControl(e.source.value));
    } else {
      let i: number = 0;
      array.controls.forEach((item: AbstractControl) => {
        if (item?.value == e?.source?.value) {
          array.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  ngOnInit(): void {
  }

  submitForm() {

    this.hotelListingService.addFacilitiesToHotel(this.hotelFacilityForm.value.facilitiesArray);
    this.hotelListingService.addServicesToHotel(this.hotelFacilityForm.value.servicesArray);
    this.hotelListingService.addLanguagesToHotel(this.hotelFacilityForm.value.languageControl);
    console.log(this.hotelListingService.hotelListDto);

    this.router.navigate(['/console/hotel-management/hotel-registration/hotel-amenities']).then();
  }

  get facilities():FormArray{
    return this.hotelFacilityForm.get('facilitiesArray') as FormArray;
  }

  get services():FormArray{
    return this.hotelFacilityForm.get('servicesArray') as FormArray;
  }
}



// get selectedLanguage(): string {
//   return <string>this._selectedLanguage;
// }
//
// set selectedLanguage(value: string) {
//   this._selectedLanguage = value;
// }
//
// languages = iso6391.getAllNames().map(name => {
//   return { name: name, code: iso6391.getCode(name) };
// });
//
// private _selectedLanguage: string | undefined;


