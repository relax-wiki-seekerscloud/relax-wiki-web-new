import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EntertainmentManagementComponent} from './entertainment-management.component';
import {EntertainmentDefaultComponent} from "./components/entertainment-default/entertainment-default.component";
import {EntertainmentSearchService} from "./service/entertainment-search.service";
import {EntertainmentBookingComponent} from "./components/entertainment-booking/entertainment-booking.component";
import { EntertainmentListComponent} from "./components/entertainment-list/entertainment-list.component";
import {
  EntertainmentRegistrationComponent
} from "./components/entertainment-registration/entertainment-registration.component";
import {
  EntertainmentBasicInfoComponent
} from "./components/entertainment-registration/entertainment-basic-info/entertainment-basic-info.component";
import {EntertainmentMoreInfoComponent} from "./components/entertainment-registration/entertainment-more-info/entertainment-more-info.component";
import {EntertainmentFacilitiesComponent} from "./components/entertainment-registration/entertainment-facilities/entertainment-facilities.component";
import {EntertainmentPhotosComponent} from "./components/entertainment-registration/entertainment-photos/entertainment-photos.component";
import {EntertainmentPoliciesComponent} from "./components/entertainment-registration/entertainment-policies/entertainment-policies.component";
import {EntertainmentListingSuccessfulComponent} from "./components/entertainment-registration/entertainment-listing-successful/entertainment-listing-successful.component";
import {ConsoleDefaultComponent} from "../../components/console-default/console-default.component";

const routes: Routes = [{ path: '', component: EntertainmentManagementComponent },
  {path:'entertainment-default', component: EntertainmentDefaultComponent},
  {
    path: 'entertainment-list', component: EntertainmentListComponent,
    resolve: {
      data: EntertainmentSearchService
    }
  },
  {path: 'entertainment-booking', component: EntertainmentBookingComponent},

  { path: 'activity-center-owner-profile', loadChildren: () => import('./modules/activity-center-owner-profile/activity-center-owner-profile.module').then(m => m.ActivityCenterOwnerProfileModule) },

  { path: '', component: EntertainmentManagementComponent,children:[
      {path:'',redirectTo:'main',pathMatch:"full"},
      {path:'main', component:EntertainmentDefaultComponent},
      {path:'entertainment-default', component: EntertainmentDefaultComponent},
      {path:'entertainment-list', component: EntertainmentListComponent},
      { path: 'activity-center-owner-profile', loadChildren: () => import('./modules/activity-center-owner-profile/activity-center-owner-profile.module').then(m => m.ActivityCenterOwnerProfileModule) },
      {
        path: 'entertainment-registration', component: EntertainmentRegistrationComponent,
        children: [
          {path: 'entertainment-basic-info', component: EntertainmentBasicInfoComponent},
          {path:'entertainment-more-info',component:EntertainmentMoreInfoComponent},
          {path:'entertainment-facilities',component:EntertainmentFacilitiesComponent},
          {path:'entertainment-photos',component:EntertainmentPhotosComponent},
          {path:'entertainment-policies',component:EntertainmentPoliciesComponent},
          {path:'entertainment-listing-successful',component:EntertainmentListingSuccessfulComponent},
        ]
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntertainmentManagementRoutingModule {
}
