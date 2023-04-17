import { RouterModule, Routes } from '@angular/router';
import { HotelManagementComponent } from './hotel-management.component';
import { HotelDefaultComponent} from "./components/hotel-default/hotel-default.component";
import {NgModule} from '@angular/core';
import {HotelBasicInfoComponent} from "./components/hotel-registration/hotel-basic-info/hotel-basic-info.component";
import {HotelRegistrationComponent} from "./components/hotel-registration/hotel-registration.component";
import {HotelCategoryComponent} from "./components/hotel-registration/hotel-category/hotel-category.component";
import {HotelRoomCountComponent} from "./components/hotel-registration/hotel-room-count/hotel-room-count.component";
import {HotelFacilitiesComponent} from "./components/hotel-registration/hotel-facilities/hotel-facilities.component";
import {HotelAmenitiesComponent} from "./components/hotel-registration/hotel-amenities/hotel-amenities.component";
import {HotelPolicyComponent} from "./components/hotel-registration/hotel-policy/hotel-policy.component";
import {HotelPaymentsComponent} from "./components/hotel-registration/hotel-payments/hotel-payments.component";
import {
  HotelListingSuccessfulComponent
} from "./components/hotel-registration/hotel-listing-successful/hotel-listing-successful.component";
import {HotelPhotosComponent} from "./components/hotel-registration/hotel-photos/hotel-photos.component";
import {HotelRoomDescriptionComponent} from "./components/hotel-registration/hotel-room-description/hotel-room-description.component";
import {HotelBookingProcessComponent} from "./components/hotel-booking-process/hotel-booking-process.component";
import {HotelSingleViewComponent} from "./components/hotel-booking-process/hotel-single-view/hotel-single-view.component";
import {HotelBookingSummaryComponent} from "./components/hotel-booking-process/hotel-booking-summary/hotel-booking-summary.component";


const routes: Routes = [
  {path: '', component: HotelManagementComponent},
  { path: 'hotel-owner-profile', loadChildren: () => import('./modules/hotel-owner-profile/hotel-owner-profile.module').then(m => m.HotelOwnerProfileModule) },
  {path:'hotel-default', component: HotelDefaultComponent},
  {path: 'hotel-registration', component: HotelRegistrationComponent,
    children: [
      {path: 'hotel-category', component:HotelCategoryComponent},
      {path: 'hotel-basic-info', component: HotelBasicInfoComponent},
      {path: 'hotel-room-count', component:HotelRoomCountComponent},
      {path: 'hotel-room-description',component:HotelRoomDescriptionComponent},
      {path:'hotel-facilities',component:HotelFacilitiesComponent},
      {path: 'hotel-amenities',component:HotelAmenitiesComponent},
      {path:'hotel-policy',component:HotelPolicyComponent},
      {path:'hotel-payments',component:HotelPaymentsComponent},
      {path: 'hotel-listing-successful',component:HotelListingSuccessfulComponent},
      {path:'hotel-photos',component:HotelPhotosComponent},
      {path: 'hotel-room-description',component:HotelRoomDescriptionComponent},



    ],
  },
  {path:'hotel-booking-process', component:HotelBookingProcessComponent,
    children:[
      {path: 'hotel-single-view',component: HotelSingleViewComponent},
      {path: 'hotel-booking-summary',component: HotelBookingSummaryComponent},
    ],
  },



];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelManagementRoutingModule {
}
