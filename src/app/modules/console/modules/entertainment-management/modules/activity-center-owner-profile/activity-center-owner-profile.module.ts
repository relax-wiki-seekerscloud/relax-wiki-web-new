import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityCenterOwnerProfileRoutingModule } from './activity-center-owner-profile-routing.module';
import { ActivityCenterOwnerProfileComponent } from './activity-center-owner-profile.component';
import { BasicInformationComponent } from './basic-information/basic-information.component';
import { SalesInformationComponent } from './sales-information/sales-information.component';
import { ActivityNavbarComponent } from './activity-navbar/activity-navbar.component';
import {ShareModule} from "../../../../../share/share.module";
import {FormsModule} from "@angular/forms";
import {ChipListComponent} from "../../../../../share/components/chip-list/chip-list.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatChipsModule} from "@angular/material/chips";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    ActivityCenterOwnerProfileComponent,
    BasicInformationComponent,
    SalesInformationComponent,
    ActivityNavbarComponent,
    ChipListComponent,
  ],
    exports: [
        ActivityCenterOwnerProfileComponent,
        ChipListComponent
    ],
  imports: [
    CommonModule,
    ActivityCenterOwnerProfileRoutingModule,
    ShareModule,
    FormsModule,
    MatFormFieldModule,
    MatChipsModule,
    MatIconModule
  ]
})
export class ActivityCenterOwnerProfileModule { }
