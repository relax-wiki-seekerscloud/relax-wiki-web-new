import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module';
import { SecurityComponent } from './security.component';
import { LoginComponent } from './components/login/login.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import { SignUpComponent } from './components/sign-up/sign-up.component';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {HttpClientModule} from "@angular/common/http";
import { EmailVerifiedComponent } from './components/email-verified/email-verified.component';
import { EmailNotVerifiedComponent } from './components/email-not-verified/email-not-verified.component';
import {ShareModule} from "../share/share.module";
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { PleaseVerifyEmailComponent } from './components/please-verify-email/please-verify-email.component';

@NgModule({
  declarations: [
    SecurityComponent,
    LoginComponent,
    SignUpComponent,
    EmailVerifiedComponent,
    EmailNotVerifiedComponent,
    VerifyEmailComponent,
    PleaseVerifyEmailComponent
  ],
  exports: [
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
    ShareModule
  ]
})
export class SecurityModule { }
