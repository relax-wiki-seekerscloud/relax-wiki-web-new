import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaxiRentalManagementComponent } from './taxi-rental-management.component';
import { TaxiRentalDefaultComponent } from './components/taxi-rental-default/taxi-rental-default.component';
import { TaxiListComponent } from './components/taxi-list/taxi-list.component';
import { TaxiListByCategoryComponent } from './components/taxi-list-by-category/taxi-list-by-category.component';
import { TaxiSingleViewComponent } from './components/taxi-booking-process/taxi-single-view/taxi-single-view.component';
import { TaxiBookingSummaryComponent } from './components/taxi-booking-process/taxi-booking-summary/taxi-booking-summary.component';

const routes: Routes = [
  { path: '', component: TaxiRentalManagementComponent },
  { path: 'taxi-rental-default', component: TaxiRentalDefaultComponent },
  { path: 'taxi-list', component: TaxiListComponent },
  {
    path: 'taxi-list-by-category/:id',
    component: TaxiListByCategoryComponent,
  },
  { path: 'taxi-single-view/:id', component: TaxiSingleViewComponent },
  { path: 'taxi-booking-summary/:id', component: TaxiBookingSummaryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaxiRentalManagementRoutingModule {}
