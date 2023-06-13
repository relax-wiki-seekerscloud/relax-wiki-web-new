import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantManagementRoutingModule } from './restaurant-management-routing.module';
import { RestaurantManagementComponent } from './restaurant-management.component';
import { RestaurantDefaultComponent } from './components/restaurant-default/restaurant-default.component';
import { RestaurantRegistrationComponent } from './components/restaurant-registration/restaurant-registration.component';
import {FormsModule} from "@angular/forms";
import {ShareModule} from "../../../share/share.module";
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';
import {MatIconModule} from "@angular/material/icon";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { RestaurantBookingProcessComponent } from './components/restaurant-booking-process/restaurant-booking-process.component';
import { RestaurantSingleViewComponent } from './components/restaurant-booking-process/restaurant-single-view/restaurant-single-view.component';
import { RestaurantBookingSummaryComponent } from './components/restaurant-booking-process/restaurant-booking-summary/restaurant-booking-summary.component';
import {RestaurantOwnerProfileModule} from "./modules/restaurant-owner-profile/restaurant-owner-profile.module";



@NgModule({
    declarations: [
        RestaurantManagementComponent,
        RestaurantDefaultComponent,
        RestaurantRegistrationComponent,
        RestaurantListComponent,
        RestaurantBookingProcessComponent,
        RestaurantSingleViewComponent,
        RestaurantBookingSummaryComponent,


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
    RestaurantOwnerProfileModule
  ]
})
export class RestaurantManagementModule { }
