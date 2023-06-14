import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsoleComponent } from './console.component';
import {AdvertisementDefaultComponent} from "./components/advertisements/components/advertisement-default/advertisement-default.component";
import {AdvertisementPaymentSuccessfulComponent} from "./components/advertisements/components/advertisement-payment-successful/advertisement-payment-successful.component";
import {AdvertisementPaymentFaildComponent} from "./components/advertisements/components/advertisement-payment-faild/advertisement-payment-faild.component";
import {AdvertisementImageComponent} from "./components/advertisements/components/advertisement-image/advertisement-image.component";
import {AdvertisementsVideoComponent} from "./components/advertisements/components/advertisements-video/advertisements-video.component";
import * as path from "path";
import {main} from "@angular/compiler-cli/src/main";
import {ConsoleDefaultComponent} from "./components/console-default/console-default.component";

const routes: Routes = [
  { path: '', component: ConsoleComponent, children: [
      {path:'',redirectTo:'main',pathMatch:"full"},
      {path:'main',component:ConsoleDefaultComponent},
      { path: 'taxi-rental-management', loadChildren: () => import('./modules/taxi-rental-management/taxi-rental-management.module').then(m => m.TaxiRentalManagementModule) },
      { path: 'advertisement-default', component:AdvertisementDefaultComponent},
      { path: 'advertisement-payment-successful', component:AdvertisementPaymentSuccessfulComponent},
      { path: 'advertisement-payment-faild' , component:AdvertisementPaymentFaildComponent},
      { path: 'advertisement-image' , component:AdvertisementImageComponent},
      { path: 'advertisement-video' , component:AdvertisementsVideoComponent},
      { path: 'daily-process', loadChildren: () => import('./modules/daily-process/daily-process.module').then(m => m.DailyProcessModule) },
      { path: 'restaurant-management', loadChildren: () => import('./modules/restaurant-management/restaurant-management.module').then(m => m.RestaurantManagementModule) },
      { path: 'hotel-management', loadChildren: () => import('./modules/hotel-management/hotel-management.module').then(m => m.HotelManagementModule) },
      { path: 'entertainment-management', loadChildren: () => import('./modules/entertainment-management/entertainment-management.module').then(m => m.EntertainmentManagementModule) },
    ]},


];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsoleRoutingModule { }
