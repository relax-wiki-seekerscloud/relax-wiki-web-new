import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserProfileModule} from "./modules/user-profile/user-profile.module";


import { DailyProcessRoutingModule } from './daily-process-routing.module';
import { DailyProcessComponent } from './daily-process.component';
import {ShareModule} from "../../../share/share.module";


@NgModule({
  declarations: [
    DailyProcessComponent,


  ],
  imports: [
    CommonModule,
    DailyProcessRoutingModule,
    UserProfileModule,
    ShareModule

  ]
})
export class DailyProcessModule { }
