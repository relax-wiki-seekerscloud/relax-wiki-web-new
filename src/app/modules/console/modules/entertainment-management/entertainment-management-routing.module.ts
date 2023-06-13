import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EntertainmentManagementComponent} from './entertainment-management.component';
import {EntertainmentDefaultComponent} from "./components/entertainment-default/entertainment-default.component";
import {EntertainmentListComponent} from "./components/entertainment-list/entertainment-list.component";
import {EntertainmentSearchService} from "./service/entertainment-search.service";
import {EntertainmentBookingComponent} from "./components/entertainment-booking/entertainment-booking.component";

const routes: Routes = [{path: '', component: EntertainmentManagementComponent},
  {path: 'entertainment-default', component: EntertainmentDefaultComponent},
  {
    path: 'entertainment-list', component: EntertainmentListComponent,
    resolve: {
      data: EntertainmentSearchService
    }
  },
  {path: 'entertainment-booking', component: EntertainmentBookingComponent},
  {
    path: 'activity-center-owner-profile',
    loadChildren: () => import('./modules/activity-center-owner-profile/activity-center-owner-profile.module').then(m => m.ActivityCenterOwnerProfileModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntertainmentManagementRoutingModule {
}
