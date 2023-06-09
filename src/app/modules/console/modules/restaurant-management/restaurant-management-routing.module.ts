import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantManagementComponent } from './restaurant-management.component';
import {RestaurantDefaultComponent} from "./components/restaurant-default/restaurant-default.component";
import {RestaurantListComponent} from "./components/restaurant-list/restaurant-list.component";
import {RestaurantBookingProcessComponent} from "./components/restaurant-booking-process/restaurant-booking-process.component";
import {RestaurantSingleViewComponent} from "./components/restaurant-booking-process/restaurant-single-view/restaurant-single-view.component";
import {RestaurantBookingSummaryComponent} from "./components/restaurant-booking-process/restaurant-booking-summary/restaurant-booking-summary.component";
import {RestaurantBasicInfoComponent} from "./components/restaurant-registration/restaurant-basic-info/restaurant-basic-info.component";
import {RestaurantRegistrationComponent} from "./components/restaurant-registration/restaurant-registration.component";
import {RestaurantMoreInfoComponent} from "./components/restaurant-registration/restaurant-more-info/restaurant-more-info.component";
import {RestaurantFeaturesComponent} from "./components/restaurant-registration/restaurant-features/restaurant-features.component";
import {RestaurantPhotosComponent} from "./components/restaurant-registration/restaurant-photos/restaurant-photos.component";
import {RestaurantListingSuccessfulComponent} from "./components/restaurant-registration/restaurant-listing-successful/restaurant-listing-successful.component";

const routes: Routes = [{ path: '', component: RestaurantManagementComponent},
  { path: 'restaurant-owner-profile', loadChildren: () => import('./modules/restaurant-owner-profile/restaurant-owner-profile.module').then(m => m.RestaurantOwnerProfileModule) },

  {path: 'restaurant-default', component: RestaurantDefaultComponent},
  {path: 'restaurant-list', component: RestaurantListComponent},
  {path:'restaurant-booking-process', component:RestaurantBookingProcessComponent,
    children:[
      {path: 'restaurant-single-view',component: RestaurantSingleViewComponent},
      {path: 'restaurant-booking-summary',component: RestaurantBookingSummaryComponent},
    ],
  },
  {
    path: 'restaurant-registration', component: RestaurantRegistrationComponent,
    children: [
      {path: 'restaurant-basic-info', component: RestaurantBasicInfoComponent},
      {path: 'restaurant-more-info',component: RestaurantMoreInfoComponent},
      {path:'restaurant-features',component: RestaurantFeaturesComponent},
      {path:'restaurant-photos',component: RestaurantPhotosComponent},
      {path:'restaurant-listing-successful',component: RestaurantListingSuccessfulComponent},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantManagementRoutingModule { }
