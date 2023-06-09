import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Policy} from "../../../../../../share/dto/classes/hotel/RequestHotelListDTO";
import {Router} from "@angular/router";
import {HotelListingService} from "../../../../../../share/services/hotel/hotel-listing.service";

@Component({
  selector: 'app-hotel-policy',
  templateUrl: './hotel-policy.component.html',
  styleUrls: ['./hotel-policy.component.scss']
})

export class HotelPolicyComponent implements OnInit {

  hotelPolicyForm = new FormGroup({
    bookingCancelPeriod: new FormControl(''),
    bookingCancelCharge: new FormControl(''),
    pets: new FormControl(''),
    petsCharge: new FormControl(''),
    checkInTimeFrom: new FormControl(''),
    checkInTimeTo: new FormControl(''),
    checkOutTimeFrom: new FormControl(''),
    checkOutTimeTo: new FormControl(''),
  });

  public check_in_from_string: String = "04:00";
  public check_in_to_string: String = "23:00";
  public check_out_from_string: String = "04:00";
  public check_out_to_string: String = "23:00";


  constructor(private router: Router, private hotelListingService: HotelListingService) {

  }

  addPolicy() {
    let policyDTO: Policy = new Policy(
      this.hotelPolicyForm.get('bookingCancelPeriod')?.value!,
      this.hotelPolicyForm.get('bookingCancelCharge')?.value!,
      this.hotelPolicyForm.get('pets')?.value!,
      this.hotelPolicyForm.get('petsCharge')?.value!,
      this.hotelPolicyForm.get('checkInTimeFrom')?.value!,
      this.hotelPolicyForm.get('checkInTimeTo')?.value!,
      this.hotelPolicyForm.get('checkOutTimeFrom')?.value!,
      this.hotelPolicyForm.get('checkOutTimeTo')?.value!,
    )
    this.hotelListingService.addPolicyToHotel(policyDTO);
    console.log(this.hotelListingService.hotelListDto);
    this.router.navigate(['/console/hotel-management/hotel-registration/hotel-payments']).then();
  }

  ngOnInit(): void {

  }

}
