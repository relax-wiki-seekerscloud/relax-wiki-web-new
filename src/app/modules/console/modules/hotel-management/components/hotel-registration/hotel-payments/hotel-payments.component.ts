import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {HotelListingService} from "../../../../../../share/services/hotel/hotel-listing.service";


@Component({
  selector: 'app-hotel-payments',
  templateUrl: './hotel-payments.component.html',
  styleUrls: ['./hotel-payments.component.scss']
})
export class HotelPaymentsComponent implements OnInit {

  hotelPaymentForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private hotelListingService: HotelListingService) {
    this.hotelPaymentForm = this.fb.group({
      paymentsArray: this.fb.array([]),
    })
  }

  Payment: Array<any> = [
    {name: 'American Express', value: 'americanExpress'},
    {name: 'Visa', value: 'visa'},
    {name: 'Euro Mastercard', value: 'euroMastercard'},
    {name: 'American Expresss', value: 'americanExpresss'},
    {name: 'Visaa', value: 'visaa'},
    {name: 'Euro Mastercardd', value: 'euroMastercardd'},
  ];

  // payments = this._formBuilder.group({
  //   americanExpress : false,
  //   visa: false,
  //   euroMastercard: false,
  //   americanExpresss : false,
  //   visaa: false,
  //   euroMastercardd: false,
  // });

  addToArray(e: any) {

    let array = this.hotelPaymentForm.get('paymentsArray') as FormArray;

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

  public checkboxesChecked: boolean = false;

  public checkAllCheckboxes() {
    if (this.checkbox1 && this.checkbox2 && this.checkbox3) {
      this.checkboxesChecked = true;
    } else {
      this.checkboxesChecked = false;
    }
  }

  checkbox1: false;
  checkbox2: false;
  checkbox3: false;

  addPaymentInfo() {
    this.hotelListingService.addPaymentDetails(this.hotelPaymentForm.value.paymentsArray);
    // console.log(this.hotelPaymentForm.value.paymentsArray);
    console.log(this.hotelListingService.hotelListDto);
    this.router.navigate(['/console/hotel-management/hotel-registration/hotel-listing-successful']).then();
  }

  ngOnInit(): void {
  }

}
