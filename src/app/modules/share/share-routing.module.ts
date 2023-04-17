import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShareComponent } from './share.component';
import {FeedbackFormComponent} from "./components/feedback-form/feedback-form.component";

const routes: Routes = [{ path: '', component: ShareComponent },
  {path:'feedback-form', component: FeedbackFormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShareRoutingModule { }
