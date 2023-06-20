import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecurityComponent } from './security.component';
import {LoginComponent} from './components/login/login.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {EmailVerifiedComponent} from "./components/email-verified/email-verified.component";
import {EmailNotVerifiedComponent} from "./components/email-not-verified/email-not-verified.component";
import {VerifyEmailComponent} from "./components/verify-email/verify-email.component";
import {PleaseVerifyEmailComponent} from "./components/please-verify-email/please-verify-email.component";



const routes: Routes = [
  {path: '', component: SecurityComponent },
  {path:'log-in',component:LoginComponent},
  {path:'sign-up',component:SignUpComponent},
  {path:'email-verified',component:EmailVerifiedComponent},
  {path:'email-not-verified/:email',component:EmailNotVerifiedComponent},
  {path:'verify-email/:token',component:VerifyEmailComponent},
  {path:'please-verify-email/:email',component:PleaseVerifyEmailComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
