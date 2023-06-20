import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ShareModule} from "./modules/share/share.module";
import {FormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {SecurityModule} from "./modules/security/security.module";
import {ConsoleModule} from "./modules/console/console.module";

import { MatIconModule } from '@angular/material/icon';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import {FIREBASE_OPTIONS} from "@angular/fire/compat";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {
  RestaurantOwnerProfileModule
} from "./modules/console/modules/restaurant-management/modules/restaurant-owner-profile/restaurant-owner-profile.module";
import {
  HotelOwnerProfileModule
} from "./modules/console/modules/hotel-management/modules/hotel-owner-profile/hotel-owner-profile.module";

import {NgChartsModule} from "ng2-charts";
import {ChatUserListComponent} from "./modules/console/components/chat/chat-user-list.component";


@NgModule({
  declarations: [
    AppComponent,
    ChatUserListComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ShareModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    SecurityModule,
    ConsoleModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    SecurityModule,
    ConsoleModule,
    MatIconModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
    RestaurantOwnerProfileModule,
    HotelOwnerProfileModule,
    NgChartsModule,

  ],



  providers: [
    {provide:FIREBASE_OPTIONS, useValue:environment.firebase}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

