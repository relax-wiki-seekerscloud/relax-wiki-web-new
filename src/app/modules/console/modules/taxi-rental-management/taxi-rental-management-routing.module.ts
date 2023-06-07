import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaxiRentalManagementComponent } from './taxi-rental-management.component';
import { TaxiRentalDefaultComponent} from "./components/taxi-rental-default/taxi-rental-default.component";
import {TaxiListComponent} from "./components/taxi-list/taxi-list.component";
import {TaxiListByCategoryComponent} from "./components/taxi-list-by-category/taxi-list-by-category.component";

const routes: Routes = [
  { path: '', component: TaxiRentalManagementComponent },
  { path:'taxi-rental-default', component: TaxiRentalDefaultComponent},
  { path:'taxi-list', component:TaxiListComponent},
  { path:'taxi-list-by-category', component: TaxiListByCategoryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaxiRentalManagementRoutingModule { }
