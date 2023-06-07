import {Component, OnInit} from '@angular/core';
import iso6391 from "iso-639-1";
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {
  EntertainmentListingService
} from "../../../../../../share/services/entertainment/entertainment-listing.service";
import {RestaurantFeatures} from "../../../../../../share/dto/classes/restaurant/RequestRestaurantListDTO";
import {EntertainmentFacilities} from "../../../../../../share/dto/classes/entertainment/RequestEntertainmentListDTO";

@Component({
  selector: 'app-entertainment-facilities',
  templateUrl: './entertainment-facilities.component.html',
  styleUrls: ['./entertainment-facilities.component.scss']
})
export class EntertainmentFacilitiesComponent implements OnInit {

  languageOptions: string[] = iso6391.getAllNames();
  entertainmentFacilityForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private entertainmentListingService: EntertainmentListingService) {
    this.entertainmentFacilityForm = this.fb.group({
      facilitiesArray: this.fb.array([]),
      activitiesArray: this.fb.array([]),
      packagesArray: this.fb.array([]),
      languageControl: new FormControl([]),
    })
  }
  Facility: Array<any> = [
    {name: 'Equipment Rental', value: 'equipmentRental'},
    {name: 'Changing Rooms and Showers', value: 'changingRoomsAndShowers'},
    {name: 'Food Services', value: 'foodServices'},
    {name: 'Parking', value: 'parking'},
    {name: 'Restrooms', value: 'restrooms'},
    {name: 'Lockers', value: 'lockers'},
    {name: 'Accessibility', value: 'accessibility'},
    {name: 'Wi-Fi', value: 'wifi'},
    {name: 'Safety Measures', value: 'safetyMeasures'},
    {name: 'Seating Areas', value: 'safetyMeasures'},
    {name: 'Picnic areas/BBQ Facilities', value: 'picnicAreas'},
  ];

  Activity: Array<any> = [
    {name: 'Guided Tours', value: 'guidedTours'},
    {name: 'Lessons And Training', value: 'lessonsAndTrainings'},
    {name: 'Packages and Bundles', value: 'packagesAndBundles'},
    {name: 'Events and Competitions', value: 'eventsAndCompetitions'},
    {name: 'Group Activities', value: 'groupActivities'},
    {name: 'Equipment and Gear', value: 'equipmentAndGear'},
    {name: 'Certification Programs', value: 'certificationPrograms'},
    {name: 'Specialized Services', value: 'specializedServices'},
    {name: 'Child-Friendly Activities', value: 'childFriendlyActivities'},
    {name: 'Nature and Wildlife Experiences', value: 'natureAndWildlife'},
    {name: 'Entertainment and Evening Events', value: 'entertainmentAndEveningEvents'},
  ];


  Package: Array<any> = [
    {name: 'Standard Package', value: 'standard'},
    {name: 'Full-Day Package', value: 'fullDay'},
    {name: 'Family Package', value: 'family'},
    {name: 'Group Package', value: 'group'},
    {name: 'Adventure Package', value: 'adventure'},
    {name: 'Romantic Gateway Package', value: 'romanticGateway'},
    {name: 'Training And Certification Package', value: 'trainingAndCertification'},
    {name: 'Weekend Escape Package', value: 'weekendEscape'},
    {name: 'Seasonal Package', value: 'seasonal'},
    {name: 'Exclusive VIP Package', value: 'VIP'},
  ];

  addToArray(e: any, type: String) {
    let array: FormArray;
    if (type == 'facility') {
      array = this.entertainmentFacilityForm.get('facilitiesArray') as FormArray;
    } else if (type == 'activity') {
      array = this.entertainmentFacilityForm.get('activitiesArray') as FormArray;
    }  else {
      array = this.entertainmentFacilityForm.get('packagesArray') as FormArray;
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

  addEntertainmentFacility(){
    let entertainmentFacilityDTO: EntertainmentFacilities = new EntertainmentFacilities(
      this.entertainmentFacilityForm.get('facilitiesArray')?.value!,
      this.entertainmentFacilityForm.get('activitiesArray')?.value!,
      this.entertainmentFacilityForm.get('packagesArray')?.value!,
      this.entertainmentFacilityForm.get('languageControl')?.value!,
    )
    this.entertainmentListingService.addFacilitiesToEntertainment(entertainmentFacilityDTO);
    console.log(this.entertainmentListingService.entertainmentListDTO);
    this.router.navigate(['/console/entertainment-management/entertainment-registration/entertainment-photos']).then();

  }
  ngOnInit(): void {
  }

}
