import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantManagementComponent } from './restaurant-management.component';
import {RestaurantDefaultComponent} from "./components/restaurant-default/restaurant-default.component";
import {RestaurantListComponent} from "./components/restaurant-list/restaurant-list.component";
import {RestaurantBookingProcessComponent} from "./components/restaurant-booking-process/restaurant-booking-process.component";
import {RestaurantSingleViewComponent} from "./components/restaurant-booking-process/restaurant-single-view/restaurant-single-view.component";
import {RestaurantBookingSummaryComponent} from "./components/restaurant-booking-process/restaurant-booking-summary/restaurant-booking-summary.component";

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

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantManagementRoutingModule { }
