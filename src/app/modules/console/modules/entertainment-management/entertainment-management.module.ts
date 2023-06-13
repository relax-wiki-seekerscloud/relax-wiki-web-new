import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntertainmentManagementRoutingModule } from './entertainment-management-routing.module';
import { EntertainmentManagementComponent } from './entertainment-management.component';
import { EntertainmentDefaultComponent } from './components/entertainment-default/entertainment-default.component';
import { EntertainmentRegistrationComponent } from './components/entertainment-registration/entertainment-registration.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ShareModule} from "../../../share/share.module";
import { EntertainmentListComponent } from './components/entertainment-list/entertainment-list.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatIconModule} from "@angular/material/icon";
import {ActivityCenterOwnerProfileModule} from "./modules/activity-center-owner-profile/activity-center-owner-profile.module";
import { EntertainmentBasicInfoComponent } from './components/entertainment-registration/entertainment-basic-info/entertainment-basic-info.component';
import {HotelManagementModule} from "../hotel-management/hotel-management.module";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { EntertainmentMoreInfoComponent } from './components/entertainment-registration/entertainment-more-info/entertainment-more-info.component';
import {MatRadioModule} from "@angular/material/radio";
import { EntertainmentFacilitiesComponent } from './components/entertainment-registration/entertainment-facilities/entertainment-facilities.component';
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import { EntertainmentPhotosComponent } from './components/entertainment-registration/entertainment-photos/entertainment-photos.component';
import { EntertainmentPoliciesComponent } from './components/entertainment-registration/entertainment-policies/entertainment-policies.component';
import { EntertainmentListingSuccessfulComponent } from './components/entertainment-registration/entertainment-listing-successful/entertainment-listing-successful.component';
import { EntertainmentBookingComponent } from './components/entertainment-booking/entertainment-booking.component';


@NgModule({
  declarations: [
    EntertainmentManagementComponent,
    EntertainmentDefaultComponent,
    EntertainmentRegistrationComponent,
    EntertainmentListComponent,
    EntertainmentBookingComponent,
    EntertainmentBasicInfoComponent,
    EntertainmentMoreInfoComponent,
    EntertainmentFacilitiesComponent,
    EntertainmentPhotosComponent,
    EntertainmentPoliciesComponent,
    EntertainmentListingSuccessfulComponent,

  ],
  exports: [
    EntertainmentDefaultComponent
  ],
  imports: [
    CommonModule,
    EntertainmentManagementRoutingModule,
    FormsModule,
    ShareModule,
    MatCheckboxModule,
    MatIconModule,
    ActivityCenterOwnerProfileModule,
    HotelManagementModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatOptionModule,
    MatSelectModule
  ]
})
export class EntertainmentManagementModule { }
