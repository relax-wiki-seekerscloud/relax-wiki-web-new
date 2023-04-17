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


    ],



  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

