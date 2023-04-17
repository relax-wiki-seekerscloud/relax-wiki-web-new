import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserProfileComponent } from './user-profile.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { UserProfileNavBarComponent } from './user-profile-nav-bar/user-profile-nav-bar.component';
import {FormsModule} from "@angular/forms";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatTabsModule} from "@angular/material/tabs";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import { MatDividerModule } from '@angular/material/divider';
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {ShareModule} from "../../../../../share/share.module";

@NgModule({
  declarations: [
    UserProfileComponent,
    PersonalDetailsComponent,
    PaymentDetailsComponent,
    MyBookingsComponent,
    UserProfileNavBarComponent
  ],
  exports: [
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    UserProfileRoutingModule,

    FormsModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    MatTableModule,
    MatIconModule,
    ShareModule,
  ]
})
export class UserProfileModule { }
