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
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {HttpClient, HttpClientModule} from "@angular/common/http";





@NgModule({
  declarations: [
    AppComponent,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ShareModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
      MatSnackBarModule,
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


    ],



  providers: [
    {provide:FIREBASE_OPTIONS, useValue:environment.firebase}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

