import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DailyProcessComponent } from './daily-process.component';

const routes: Routes = [{ path: '', component: DailyProcessComponent },
  { path: 'user-profile', loadChildren: () => import('./modules/user-profile/user-profile.module').then(m => m.UserProfileModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DailyProcessRoutingModule { }
