import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntertainmentManagementRoutingModule } from './entertainment-management-routing.module';
import { EntertainmentManagementComponent } from './entertainment-management.component';
import { EntertainmentDefaultComponent } from './components/entertainment-default/entertainment-default.component';
import { EntertainmentRegistrationComponent } from './components/entertainment-registration/entertainment-registration.component';
import {FormsModule} from "@angular/forms";
import {ShareModule} from "../../../share/share.module";
import { EntertainmentListComponent } from './components/entertainment-list/entertainment-list.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatIconModule} from "@angular/material/icon";
import {ActivityCenterOwnerProfileModule} from "./modules/activity-center-owner-profile/activity-center-owner-profile.module";


@NgModule({
  declarations: [
    EntertainmentManagementComponent,
    EntertainmentDefaultComponent,
    EntertainmentRegistrationComponent,
    EntertainmentListComponent,

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
    ActivityCenterOwnerProfileModule
  ]
})
export class EntertainmentManagementModule { }
