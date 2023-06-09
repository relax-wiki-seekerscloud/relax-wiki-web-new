import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantManagementRoutingModule } from './restaurant-management-routing.module';
import { RestaurantManagementComponent } from './restaurant-management.component';
import { RestaurantDefaultComponent } from './components/restaurant-default/restaurant-default.component';
import { RestaurantRegistrationComponent } from './components/restaurant-registration/restaurant-registration.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ShareModule} from "../../../share/share.module";
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';
import {MatIconModule} from "@angular/material/icon";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { RestaurantBookingProcessComponent } from './components/restaurant-booking-process/restaurant-booking-process.component';
import { RestaurantSingleViewComponent } from './components/restaurant-booking-process/restaurant-single-view/restaurant-single-view.component';
import { RestaurantBookingSummaryComponent } from './components/restaurant-booking-process/restaurant-booking-summary/restaurant-booking-summary.component';
import {RestaurantOwnerProfileModule} from "./modules/restaurant-owner-profile/restaurant-owner-profile.module";
import { RestaurantBasicInfoComponent } from './components/restaurant-registration/restaurant-basic-info/restaurant-basic-info.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {HotelManagementModule} from "../hotel-management/hotel-management.module";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import { RestaurantMoreInfoComponent } from './components/restaurant-registration/restaurant-more-info/restaurant-more-info.component';
import {MatRadioModule} from "@angular/material/radio";
import { RestaurantFeaturesComponent } from './components/restaurant-registration/restaurant-features/restaurant-features.component';
import { RestaurantPhotosComponent } from './components/restaurant-registration/restaurant-photos/restaurant-photos.component';
import { RestaurantListingSuccessfulComponent } from './components/restaurant-registration/restaurant-listing-successful/restaurant-listing-successful.component';



@NgModule({
    declarations: [
        RestaurantManagementComponent,
        RestaurantDefaultComponent,
        RestaurantRegistrationComponent,
        RestaurantListComponent,
        RestaurantBookingProcessComponent,
        RestaurantSingleViewComponent,
        RestaurantBookingSummaryComponent,
        RestaurantBasicInfoComponent,
        RestaurantMoreInfoComponent,
        RestaurantFeaturesComponent,
        RestaurantPhotosComponent,
        RestaurantListingSuccessfulComponent,


    ],
  exports: [
    RestaurantDefaultComponent,
    RestaurantManagementComponent,

  ],
  imports: [
    CommonModule,
    RestaurantManagementRoutingModule,
    FormsModule,
    ShareModule,
    MatIconModule,
    MatCheckboxModule,
    RestaurantOwnerProfileModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule,
    HotelManagementModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule
  ]
})
export class RestaurantManagementModule { }
