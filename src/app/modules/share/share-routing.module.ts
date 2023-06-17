import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShareComponent } from './share.component';
import {FeedbackFormComponent} from "./components/feedback-form/feedback-form.component";
import {ConsoleDefaultComponent} from "../console/components/console-default/console-default.component";

const routes: Routes = [
  { path: '', component: ShareComponent },
  {path: 'console-default',component:ConsoleDefaultComponent},
  {path:'feedback-form', component: FeedbackFormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShareRoutingModule { }
