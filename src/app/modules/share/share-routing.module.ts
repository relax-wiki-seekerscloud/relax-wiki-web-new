import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShareComponent } from './share.component';
import {FeedbackFormComponent} from "./components/feedback-form/feedback-form.component";
import {NavBarComponent} from "./components/nav-bar/nav-bar.component";

const routes: Routes = [
  { path: '', component: ShareComponent },
  {path:'feedback-form', component: FeedbackFormComponent},
  {path:'nav-bar', component:NavBarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShareRoutingModule { }
