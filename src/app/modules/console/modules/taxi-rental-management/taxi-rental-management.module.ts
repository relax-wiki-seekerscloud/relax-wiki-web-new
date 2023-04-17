import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaxiRentalManagementRoutingModule } from './taxi-rental-management-routing.module';
import { TaxiRentalManagementComponent } from './taxi-rental-management.component';
import { TaxiRentalDefaultComponent } from './components/taxi-rental-default/taxi-rental-default.component';
import {FormsModule} from "@angular/forms";
import {ShareModule} from "../../../share/share.module";


@NgModule({
  declarations: [
    TaxiRentalManagementComponent,
    TaxiRentalDefaultComponent

  ],
  imports: [
    CommonModule,
    TaxiRentalManagementRoutingModule,
    FormsModule,
    ShareModule
  ]
})
export class TaxiRentalManagementModule { }
