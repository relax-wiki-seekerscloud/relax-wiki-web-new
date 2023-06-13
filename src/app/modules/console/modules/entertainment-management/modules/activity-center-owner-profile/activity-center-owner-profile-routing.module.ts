import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityCenterOwnerProfileComponent } from './activity-center-owner-profile.component';
import {BasicInformationComponent} from "../../../entertainment-management/modules/activity-center-owner-profile/basic-information/basic-information.component";
import {SalesInformationComponent} from "../../../entertainment-management/modules/activity-center-owner-profile/sales-information/sales-information.component";

const routes: Routes = [
  { path: '', redirectTo: 'basic-information', pathMatch: 'full' },
  { path: 'basic-information', component: BasicInformationComponent },
  { path: 'sales-information', component: SalesInformationComponent },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivityCenterOwnerProfileRoutingModule { }
