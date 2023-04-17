import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaxiRentalManagementComponent } from './taxi-rental-management.component';
import { TaxiRentalDefaultComponent} from "./components/taxi-rental-default/taxi-rental-default.component";

const routes: Routes = [{ path: '', component: TaxiRentalManagementComponent },
  {path:'taxi-rental-default', component: TaxiRentalDefaultComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaxiRentalManagementRoutingModule { }
