import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantOwnerProfileRoutingModule } from './restaurant-owner-profile-routing.module';
import { RestaurantOwnerProfileComponent } from './restaurant-owner-profile.component';
import {ShareModule} from "../../../../../share/share.module";
import { BasicInformationComponent } from './basic-information/basic-information.component';
import { SalesInformationComponent } from './sales-information/sales-information.component';
import { RestaurantProfileNavbarComponent } from './restaurant-profile-navbar/restaurant-profile-navbar.component';
import {FormsModule} from "@angular/forms";

import {MatFormFieldModule} from "@angular/material/form-field";
import {MatChipsModule} from "@angular/material/chips";
import {MatIconModule} from "@angular/material/icon";
import {
    ActivityCenterOwnerProfileModule
} from "../../../entertainment-management/modules/activity-center-owner-profile/activity-center-owner-profile.module";


@NgModule({
  declarations: [
    RestaurantOwnerProfileComponent,
    BasicInformationComponent,
    SalesInformationComponent,
    RestaurantProfileNavbarComponent,

  ],
    exports: [
        RestaurantOwnerProfileComponent,
        SalesInformationComponent
    ],
    imports: [
        CommonModule,
        RestaurantOwnerProfileRoutingModule,
        ShareModule,
        FormsModule,
        MatFormFieldModule,
        MatChipsModule,
        MatIconModule,
        ActivityCenterOwnerProfileModule
    ]
})
export class RestaurantOwnerProfileModule { }
