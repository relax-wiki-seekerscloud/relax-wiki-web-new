import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicInformationComponent } from './basic-information/basic-information.component';
import { SalesInformationComponent } from './sales-information/sales-information.component';


const routes: Routes = [
  { path: '', redirectTo: 'basic-information', pathMatch: 'full' },
  { path: 'basic-information', component: BasicInformationComponent },
  { path: 'sales-information', component: SalesInformationComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelOwnerProfileRoutingModule { }
