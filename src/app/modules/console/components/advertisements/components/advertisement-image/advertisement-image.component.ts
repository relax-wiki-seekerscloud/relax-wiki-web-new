import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-advertisement-image',
  templateUrl: './advertisement-image.component.html',
  styleUrls: ['./advertisement-image.component.scss'],
})
export class AdvertisementImageComponent implements OnInit {
  @ViewChild('title') title: ElementRef;
  @ViewChild('description') description: ElementRef;
  @ViewChild('businessName') businessName: ElementRef;
  @ViewChild('businessType') businessType: ElementRef;
  @ViewChild('businessUrl') businessUrl: ElementRef;
  @ViewChild('businessAddress') businessAddress: ElementRef;
  @ViewChild('businessPhone') businessPhone: ElementRef;
  @ViewChild('expireDate') expireDate: ElementRef;
  @ViewChild('budget') budget: ElementRef;
  @ViewChild('image') image: ElementRef;

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}
  selectedFile: File | null = null;

  price: number = 0;
  wholePriceText: string = '';

  ngOnInit(): void {}

  setPrice() {
    const regDaysCount = /^(?:[1-9]|[12]\d|30)$/;
    const regBudget = /^(1[0-5]|[1-9])$/;
    if (
      this.expireDate.nativeElement.value == '' ||
      this.expireDate.nativeElement.value == 0
    ) {
      this.wholePriceText = '';
      return;
    }
    if (!regDaysCount.test(this.expireDate.nativeElement.value)) {
      this.showSnackbar('"Days Count" field accepts only min:1 max:30');
      this.wholePriceText = '';
      return;
    }

    if (
      this.budget.nativeElement.value == '' ||
      this.budget.nativeElement.value == 0
    ) {
      this.wholePriceText = '';
      return;
    }
    if (!regBudget.test(this.budget.nativeElement.value)) {
      this.showSnackbar('"Daily Budget" field accepts only min:1 max:15');
      this.wholePriceText = '';
      return;
    }

    let days = parseInt(this.expireDate.nativeElement.value);
    let budget = parseInt(this.budget.nativeElement.value);

    let showTime = budget * 3;
    let wholeAmt = days * budget;
    this.price = wholeAmt;
    this.wholePriceText =
      'Your daily budget equal ' +
      budget +
      '$ and you have selected ' +
      days +
      ' Days. So you will be cost ' +
      wholeAmt +
      '$ and your advertisement will be shown ' +
      showTime +
      ' times a day.';
  }

  showSnackbar(message: string): void {
    const horizontalPosition: MatSnackBarHorizontalPosition = 'end'; // Change this to the desired horizontal position
    const verticalPosition: MatSnackBarVerticalPosition = 'top'; // Change this to the desired vertical position

    this.snackBar.open(message, 'Close', {
      duration: 4000,
      horizontalPosition,
      verticalPosition,
    });
  }

  dataValidated(): boolean {
    const regBusinessName = /^[A-Z a-z]+$/; // name title caption
    const regWebsiteLink = /^(http|https):\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;
    const regContactNo = /^[0-9]{10}$/;
    const regAddress = /^[A-Z a-z 0-9 - , / . ]+$/;
    const regDaysCount = /^(?:[1-9]|[12]\d|30)$/;
    const regBudget = /^(1[0-5]|[1-9])$/;
    const regImage = /\.(jpg|jpeg|png|gif|bmp)$/i;

    if (this.businessName.nativeElement.value == '') {
      this.showSnackbar(
        'You have to fill the "Name of the Business" field to continue.'
      );
      return false;
    }
    if (!regBusinessName.test(this.businessName.nativeElement.value)) {
      this.showSnackbar('"Name of the Business" field accepts only A-Z a-z');
      return false;
    }

    if (this.businessUrl.nativeElement.value == '') {
      this.showSnackbar(
        'You have to fill the "Business Website Link" field to continue.'
      );
      return false;
    }
    if (!regWebsiteLink.test(this.businessUrl.nativeElement.value)) {
      this.showSnackbar(
        '"Business Website Link" field accepts only valid web links'
      );
      return false;
    }

    if (this.businessPhone.nativeElement.value == '') {
      this.showSnackbar(
        'You have to fill the "Hotline Contact Number" field to continue.'
      );
      return false;
    }
    if (!regContactNo.test(this.businessPhone.nativeElement.value)) {
      this.showSnackbar(
        '"Hotline Contact Number" field accepts only numbers and length must be 10'
      );
      return false;
    }

    if (this.title.nativeElement.value == '') {
      this.showSnackbar(
        'You have to fill the "Advertisement Title" field to continue.'
      );
      return false;
    }
    if (!regBusinessName.test(this.title.nativeElement.value)) {
      this.showSnackbar('"Advertisement Title" field accepts only A-Z a-z');
      return false;
    }

    if (this.businessAddress.nativeElement.value == '') {
      this.showSnackbar(
        'You have to fill the "Address of the Business" field to continue.'
      );
      return false;
    }
    if (!regAddress.test(this.businessAddress.nativeElement.value)) {
      this.showSnackbar(
        '"Address of the Business" field accepts only A-Z a-z 0-9 - , / .'
      );
      return false;
    }

    if (this.description.nativeElement.value == '') {
      this.showSnackbar(
        'You have to fill the "Insert Caption" field to continue.'
      );
      return false;
    }
    if (!regBusinessName.test(this.description.nativeElement.value)) {
      this.showSnackbar('"Insert Caption" field accepts only A-Z a-z');
      return false;
    }

    if (this.image.nativeElement.value == '') {
      this.showSnackbar(
        'You have to select an Advertisement Photo to continue.'
      );
      return false;
    }
    if (!regImage.test(this.image.nativeElement.value)) {
      this.showSnackbar(
        'Advertisement Photo accepts only .jpg .jpeg .png .gif .bmp'
      );
      return false;
    }

    if (this.expireDate.nativeElement.value == '') {
      this.showSnackbar('You have to fill the "Days Count" field to continue.');
      return false;
    }
    if (!regDaysCount.test(this.expireDate.nativeElement.value)) {
      this.showSnackbar('"Days Count" field accepts only 0-9 min:1 max:30');
      return false;
    }

    if (this.budget.nativeElement.value == '') {
      this.showSnackbar(
        'You have to fill the "Daily Budget" field to continue.'
      );
      return false;
    }
    if (!regBudget.test(this.budget.nativeElement.value)) {
      this.showSnackbar('"Daily Budget" field accepts only 0-9 min:1 max:15');
      return false;
    }

    return true;
  }

  submitForm() {
    if (!this.dataValidated()) {
      return;
    }

    const formData = {
      title: this.title.nativeElement.value,
      description: this.description.nativeElement.value,
      type: 'image',
      isVerified: '0',
      status: '1',
      businessName: this.businessName.nativeElement.value,
      businessType: this.businessType.nativeElement.value,
      businessUrl: this.businessUrl.nativeElement.value,
      businessAddress: this.businessAddress.nativeElement.value,
      businessPhone: this.businessPhone.nativeElement.value,
      expireDate: this.expireDate.nativeElement.value,
      budget: this.budget.nativeElement.value,
      price: this.price,
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    this.http
      .post<any>('http://localhost:8080/advertisement', formData, { headers })
      .subscribe(
        (response) => {
          this.uploadImage(response.id);
        },
        (error) => {
          // Handle any errors
          console.error(error);
        }
      );
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadImage(id: any) {
    const formData = new FormData();
    formData.append('file', this.selectedFile);
    formData.append('id', id);

    this.http
      .post('http://localhost:8080/advertisement/upload', formData)
      .subscribe(
        (response) => {
          console.log('File uploaded successfully');
          // forward to paymnet page
        },
        (error) => {
          console.error('File upload failed', error);
        }
      );
  }
}
