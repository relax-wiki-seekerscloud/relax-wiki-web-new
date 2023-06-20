import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {
  RequestEntertainmentListDTO
} from "../../../../../../share/dto/classes/entertainment/RequestEntertainmentListDTO";
import {
  EntertainmentListingService
} from "../../../../../../share/services/entertainment/entertainment-listing.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-entertainment-basic-info',
  templateUrl: './entertainment-basic-info.component.html',
  styleUrls: ['./entertainment-basic-info.component.scss']
})
export class EntertainmentBasicInfoComponent implements OnInit {

  @Input() userName:string;
  constructor(private router:Router,private entertainmentListingService: EntertainmentListingService,private http: HttpClient) { }

  entertainmentListingForm = new FormGroup({
    activityCenterName: new FormControl('',[Validators.required, Validators.minLength(3)]),
    activityCenterDesc:new FormControl('',),
    contactPersonName:new FormControl('',[Validators.required]),
    streetAddress:new FormControl(''),
    addressLine2:new FormControl(''),
    country: new FormControl('', [Validators.required]),
    city:new FormControl('',[Validators.required]),
    postalCode:new FormControl('',[Validators.required]),
  });

  addDataToEntertainmentDTO(){
    let tempEntertainmentListDTO: RequestEntertainmentListDTO = new RequestEntertainmentListDTO(
      this.entertainmentListingForm.get('activityCenterName')?.value!,
      this.entertainmentListingForm.get('activityCenterDesc')?.value!,
      this.entertainmentListingForm.get('contactPersonName')?.value!,
      this.entertainmentListingForm.get('streetAddress')?.value!,
      this.entertainmentListingForm.get('addressLine2')?.value!,
      this.entertainmentListingForm.get('country')?.value!,
      this.entertainmentListingForm.get('city')?.value!,
      this.entertainmentListingForm.get('postalCode')?.value!
    )

    this.entertainmentListingService.addDataToEntertainmentListDTO(tempEntertainmentListDTO);
    this.router.navigate(['/console/entertainment-management/entertainment-registration/entertainment-more-info']).then();
  }
  ngOnInit(): void {
  }


  get activityCenterName(){
    return this.entertainmentListingForm.get('activityCenterName');
  }

  get contactPersonName(){
    return this.entertainmentListingForm.get('contactPersonName');
  }

  get city(){
    return this.entertainmentListingForm.get('city');
  }

  get country(){
    return this.entertainmentListingForm.get('country');
  }

  get postalCode(){
    return this.entertainmentListingForm.get('postalCode');
  }
}
