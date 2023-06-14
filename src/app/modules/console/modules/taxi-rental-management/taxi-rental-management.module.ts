import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaxiRentalManagementRoutingModule } from './taxi-rental-management-routing.module';
import { TaxiRentalManagementComponent } from './taxi-rental-management.component';
import { TaxiRentalDefaultComponent } from './components/taxi-rental-default/taxi-rental-default.component';
import {FormsModule} from "@angular/forms";
import {ShareModule} from "../../../share/share.module";
import { TaxiListComponent } from './components/taxi-list/taxi-list.component';
import { TaxiListByCategoryComponent } from './components/taxi-list-by-category/taxi-list-by-category.component';
import { TaxiBookingProcessComponent } from './components/taxi-booking-process/taxi-booking-process.component';
import { TaxiBookingSummaryComponent } from './components/taxi-booking-process/taxi-booking-summary/taxi-booking-summary.component';
import { TaxiPaymentComponent } from './components/taxi-booking-process/taxi-payment/taxi-payment.component';
import { TaxiSingleViewComponent } from './components/taxi-booking-process/taxi-single-view/taxi-single-view.component';


@NgModule({
  declarations: [
    TaxiRentalManagementComponent,
    TaxiRentalDefaultComponent,
    TaxiListComponent,
    TaxiListByCategoryComponent,
    TaxiBookingProcessComponent,
    TaxiBookingSummaryComponent,
    TaxiPaymentComponent,
    TaxiSingleViewComponent

  ],
  imports: [
    CommonModule,
    TaxiRentalManagementRoutingModule,
    FormsModule,
    ShareModule
  ]
})
export class TaxiRentalManagementModule { }
