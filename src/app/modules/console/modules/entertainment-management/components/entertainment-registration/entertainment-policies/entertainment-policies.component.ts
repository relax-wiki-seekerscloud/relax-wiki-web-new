import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {EntertainmentPolicy} from "../../../../../../share/dto/classes/entertainment/RequestEntertainmentListDTO";
import {
  EntertainmentListingService
} from "../../../../../../share/services/entertainment/entertainment-listing.service";

@Component({
  selector: 'app-entertainment-policies',
  templateUrl: './entertainment-policies.component.html',
  styleUrls: ['./entertainment-policies.component.scss']
})
export class EntertainmentPoliciesComponent implements OnInit {

  entertainmentPolicyForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private entertainmentListingService: EntertainmentListingService) {
    this.entertainmentPolicyForm = this.fb.group({
      bookingCancelPeriod: new FormControl(''),
      bookingCancelCharge: new FormControl(''),
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

  addToArray(e: any) {

    let array = this.entertainmentPolicyForm.get('paymentsArray') as FormArray;

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
    this.checkboxesChecked = this.checkbox1 && this.checkbox2 && this.checkbox3;
  }

  checkbox1: false;
  checkbox2: false;
  checkbox3: false;

  addPolicyInfo() {
    let policyDTO: EntertainmentPolicy = new EntertainmentPolicy(
      this.entertainmentPolicyForm.get('bookingCancelPeriod')?.value!,
      this.entertainmentPolicyForm.get('bookingCancelCharge')?.value!,
      this.entertainmentPolicyForm.get('paymentsArray')?.value!,
    )
    this.entertainmentListingService.addPolicyToEntertainment(policyDTO);
    console.log(this.entertainmentListingService.entertainmentListDTO);
    const result = this.entertainmentListingService.postEntertainmentListing(this.entertainmentListingService.entertainmentListDTO);
    result.subscribe((res) => console.log(res));
    this.router.navigate(['/console/entertainment-management/entertainment-registration/entertainment-listing-successful']).then();
  }

  ngOnInit(): void {
  }

}
