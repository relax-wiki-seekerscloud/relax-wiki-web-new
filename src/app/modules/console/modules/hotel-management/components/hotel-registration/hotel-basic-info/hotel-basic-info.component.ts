import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RequestHotelListDTO} from "../../../../../../share/dto/classes/hotel/RequestHotelListDTO";
import {HotelListingService} from "../../../../../../share/services/hotel/hotel-listing.service";
import {Router} from "@angular/router";



@Component({
  selector: 'app-hotel-basic-info',
  templateUrl: './hotel-basic-info.component.html',
  styleUrls: ['./hotel-basic-info.component.scss']
})

export class HotelBasicInfoComponent implements OnInit {

  hotelListingForm = new FormGroup({
    hotelName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    starRating: new FormControl('', [Validators.required]),
    contactPersonName: new FormControl('', Validators.required),
    streetAddress:new FormControl('',Validators.required),
    addressLine2:new FormControl(''),
    country:new FormControl(''),
    city:new FormControl(''),
    postalCode:new FormControl('')
  });

  constructor(private router:Router, private hotelListingService: HotelListingService) {

  }

  addDataToHotelDTO() {
    let tempHotelListDTO: RequestHotelListDTO = new RequestHotelListDTO(
      this.hotelListingForm.get('hotelName')?.value!,
      this.hotelListingForm.get('starRating')?.value!,
      this.hotelListingForm.get('contactPersonName')?.value!,
      this.hotelListingForm.get('streetAddress')?.value!,
      this.hotelListingForm.get('addressLine2')?.value!,
      this.hotelListingForm.get('country')?.value!,
      this.hotelListingForm.get('city')?.value!,
      this.hotelListingForm.get('postalCode')?.value!

    )
    this.hotelListingService.addDataToHotelListDTO(tempHotelListDTO);
    this.router.navigate(['/console/hotel-management/hotel-registration/hotel-room-count']).then();
  }


  ngOnInit(): void {

  }

  // phoneForm:FormGroup;
  // constructor(private fb: FormBuilder) {
  //   this.phoneForm = this.fb.group({
  //     phone: "+919876543210"
  //   });
  // }
}

