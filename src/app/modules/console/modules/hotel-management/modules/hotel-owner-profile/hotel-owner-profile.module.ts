import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelOwnerProfileRoutingModule } from './hotel-owner-profile-routing.module';
import { HotelOwnerProfileComponent } from './hotel-owner-profile.component';
import { BasicInformationComponent } from './basic-information/basic-information.component';
import { SalesInformationComponent } from './sales-information/sales-information.component';



import { HotelProfileNavbarComponent } from './hotel-profile-navbar/hotel-profile-navbar.component';

import {MatFormFieldModule} from "@angular/material/form-field";
import {MatChipsModule} from "@angular/material/chips";
import {MatIconModule} from "@angular/material/icon";
import { FormsModule } from '@angular/forms';
import {ShareModule} from "../../../../../share/share.module";
import { ActivityCenterOwnerProfileModule} from "../../../entertainment-management/modules/activity-center-owner-profile/activity-center-owner-profile.module";


@NgModule({
  declarations: [
    HotelOwnerProfileComponent,
    BasicInformationComponent,
    SalesInformationComponent,



    HotelProfileNavbarComponent,



  ],
  exports: [
    HotelOwnerProfileComponent,

  ],
    imports: [
        CommonModule,
        HotelOwnerProfileRoutingModule,
        MatFormFieldModule,
        MatChipsModule,
        MatIconModule,
        FormsModule,
        ShareModule,
        ActivityCenterOwnerProfileModule
    ]
})
export class HotelOwnerProfileModule { }
