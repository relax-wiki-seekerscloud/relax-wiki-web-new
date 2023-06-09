import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareRoutingModule } from './share-routing.module';
import { ShareComponent } from './share.component';
import {FooterComponent} from "./components/footer/footer.component";
import {FooterTwoComponent} from "./components/footer-two/footer-two.component";
import {NavBarComponent} from "./components/nav-bar/nav-bar.component";
import {NavBarTwoComponent} from "./components/nav-bar-two/nav-bar-two.component";
import {RelaxwikiLogoComponent} from "./components/relaxwiki-logo/relaxwiki-logo.component";
import { PaymentUserDetailsComponent } from './components/payment-user-details/payment-user-details.component';
import { PaymentCardDetailsComponent } from './components/payment-card-details/payment-card-details.component';
import { PaymentSuccessfulComponent } from './components/payment-successful/payment-successful.component';
import { FeedbackFormComponent } from './components/feedback-form/feedback-form.component';
import { FilterByBudgetComponent } from './components/filter-by-budget/filter-by-budget.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import { FilterByRatingComponent } from './components/filter-by-rating/filter-by-rating.component';
import { HotelSearchSmallComponent } from './components/hotel-search-small/hotel-search-small.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FilterByEntertainmentActivityComponent } from './components/filter-by-entertainment-activity/filter-by-entertainment-activity.component';

import {StatusBarComponent} from "./components/status-bar/status-bar.component";
import { InputFieldComponent } from './components/input-field/input-field.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { HotelCategoryContainerBoxComponent } from './components/hotel-category-container-box/hotel-category-container-box.component';
import { HotelRoomContainerBoxComponent } from './components/hotel-room-container-box/hotel-room-container-box.component';
import { FormSelectionBoxComponent } from './components/form-selection-box/form-selection-box.component';

import { PaginatorComponent } from './components/paginator/paginator.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import { BookingSummaryBox1Component } from './components/booking-summary-box1/booking-summary-box1.component';
import {MatIconModule} from "@angular/material/icon";
import { BookingSummaryBox2Component } from './components/booking-summary-box2/booking-summary-box2.component';
import { BookingSummaryBox3Component } from './components/booking-summary-box3/booking-summary-box3.component';
import { BookingSummaryPersonnalDetailsFormComponent } from './components/booking-summary-personnal-details-form/booking-summary-personnal-details-form.component';
import { DropzoneDirective } from './directives/dropzone.directive';
import { UploadTaskComponent } from './components/upload-task/upload-task.component';
import { StatusBarSteps4Component } from './components/status-bar-steps4/status-bar-steps4.component';


@NgModule({
  declarations: [
    ShareComponent,
    FooterComponent,
    FooterTwoComponent,
    NavBarComponent,
    NavBarTwoComponent,
    RelaxwikiLogoComponent,
    PaymentUserDetailsComponent,
    PaymentCardDetailsComponent,
    PaymentSuccessfulComponent,
    FilterByBudgetComponent,
    FilterByRatingComponent,
    HotelSearchSmallComponent,
    FilterByEntertainmentActivityComponent,
    FeedbackFormComponent,
    StatusBarComponent,
    InputFieldComponent,
    HotelCategoryContainerBoxComponent,
    HotelRoomContainerBoxComponent,
    PaginatorComponent,
    HotelRoomContainerBoxComponent,
    BookingSummaryBox1Component,
    BookingSummaryBox2Component,
    BookingSummaryBox3Component,
    FormSelectionBoxComponent,
    BookingSummaryPersonnalDetailsFormComponent,
    FormSelectionBoxComponent,
    DropzoneDirective,
    UploadTaskComponent,
    StatusBarSteps4Component
  ],
    exports: [
        FooterComponent,
        FooterTwoComponent,
        NavBarComponent,
        NavBarTwoComponent,
        RelaxwikiLogoComponent,
        FilterByBudgetComponent,
        FilterByRatingComponent,
        HotelSearchSmallComponent,
        FilterByEntertainmentActivityComponent,
        StatusBarComponent,
        InputFieldComponent,
        HotelCategoryContainerBoxComponent,
        HotelRoomContainerBoxComponent,
        FormSelectionBoxComponent,
        HotelRoomContainerBoxComponent,
        FeedbackFormComponent,
        PaginatorComponent,
        BookingSummaryBox1Component,
        BookingSummaryBox2Component,
        BookingSummaryBox3Component,
        DropzoneDirective,
        UploadTaskComponent,
        StatusBarSteps4Component

    ],


  imports: [
    CommonModule,
    ShareRoutingModule,
    MatCheckboxModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatIconModule
  ],



})
export class ShareModule { }
