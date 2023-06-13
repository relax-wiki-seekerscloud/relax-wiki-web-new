import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'personal-details', component: PersonalDetailsComponent },
      { path: 'payment-details', component: PaymentDetailsComponent },
      { path: 'my-bookings', component: MyBookingsComponent },
      { path: '', redirectTo: 'personal-details', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserProfileRoutingModule {}
