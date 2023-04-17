import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';


export interface Chip {
  value: string;
}

export interface Language extends Chip {}

export interface Meals extends Chip {}

export interface Parking extends Chip {}

export interface Atmosphere extends Chip {}

export interface Additional extends Chip {}

@Component({
  selector: 'app-basic-information',
  templateUrl: './basic-information.component.html',
  styleUrls: ['./basic-information.component.scss']
})
export class BasicInformationComponent implements OnInit {
  @ViewChild('saveButton', { static: false }) saveButton!: ElementRef;
  @ViewChild('cancelButton', { static: false }) cancelButton!: ElementRef;

  constructor() {
    this.restDescription = '';
  }

  // Display name

  editModeDisplayName = false;
  DisplayName = 'Aaaaaaaaaaa';
  previousDisplayName!: string;

  toggleEditModeDisplayName(event: Event) {
    event.preventDefault();
    if (!this.editModeDisplayName) {
      this.previousDisplayName = this.DisplayName;
    }
    this.editModeDisplayName = !this.editModeDisplayName;
  }

  onFocusOutDisplayName(event: FocusEvent) {
    if (
      !event.relatedTarget ||
      !(
        event.relatedTarget === this.saveButton?.nativeElement ||
        event.relatedTarget === this.cancelButton?.nativeElement
      )
    ) {
      this.toggleEditModeDisplayName(event);
    }
  }

  onSaveDisplayName() {
    this.editModeDisplayName = false;
    console.log('Saved:', this.DisplayName);
  }

  onCancelDisplayName() {
    this.editModeDisplayName = false;
    this.DisplayName = this.previousDisplayName;
  }

  // Address
  editModeAddress = false;
  Address = '1234 Main Street, Kalutara, Sri Lanka';
  previousAddress!: string;

  toggleEditModeAddress(event: Event) {
    event.preventDefault();
    if (!this.editModeAddress) {
      this.previousAddress = this.Address;
    }
    this.editModeAddress = !this.editModeAddress;
  }

  onFocusOutAddress(event: FocusEvent) {
    if (
      !event.relatedTarget ||
      !(
        event.relatedTarget === this.saveButton?.nativeElement ||
        event.relatedTarget === this.cancelButton?.nativeElement
      )
    ) {
      this.toggleEditModeAddress(event);
    }
  }

  onSaveAddress() {
    this.editModeAddress = false;
    console.log('Saved:', this.Address);
  }

  onCancelAddress() {
    this.editModeAddress = false;
    this.Address = this.previousAddress;
  }

  // Phone number
  editModePhoneNumber = false;
  PhoneNumber = '1234567890';
  previousPhoneNumber!: string;

  toggleEditModePhoneNumber(event: Event) {
    event.preventDefault();
    if (!this.editModePhoneNumber) {
      this.previousPhoneNumber = this.PhoneNumber;
    }
    this.editModePhoneNumber = !this.editModePhoneNumber;
  }

  onFocusOutPhoneNumber(event: FocusEvent) {
    if (
      !event.relatedTarget ||
      !(
        event.relatedTarget === this.saveButton?.nativeElement ||
        event.relatedTarget === this.cancelButton?.nativeElement
      )
    ) {
      this.toggleEditModePhoneNumber(event);
    }
  }

  onSavePhoneNumber() {
    this.editModePhoneNumber = false;
    console.log('Saved:', this.PhoneNumber);
  }

  onCancelPhoneNumber() {
    this.editModePhoneNumber = false;
    this.PhoneNumber = this.previousPhoneNumber;
  }

  onPhoneNumberKeyPress(event: KeyboardEvent) {
    const pattern = /[0-9]/;
    const inputChar = String.fromCharCode(event.keyCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  // Email address
  editModeEmailAddress = false;
  EmailAddress = 'example@gmail.com';
  previousEmailAddress!: string;

  toggleEditModeEmailAddress(event: Event) {
    event.preventDefault();
    if (!this.editModeEmailAddress) {
      this.previousEmailAddress = this.EmailAddress;
    }
    this.editModeEmailAddress = !this.editModeEmailAddress;
  }

  onFocusOutEmailAddress(event: FocusEvent) {
    if (
      !event.relatedTarget ||
      !(
        event.relatedTarget === this.saveButton?.nativeElement ||
        event.relatedTarget === this.cancelButton?.nativeElement
      )
    ) {
      this.toggleEditModeEmailAddress(event);
    }
  }

  onSaveEmailAddress() {
    this.editModeEmailAddress = false;
    console.log('Saved:', this.EmailAddress);
  }

  onCancelEmailAddress() {
    this.editModeEmailAddress = false;
    this.EmailAddress = this.previousEmailAddress;
  }

  // password
  // Add the following properties
  editModePassword = false;
  oldPassword = '';
  newPassword = '';
  confirmPassword = '';

// Add the following methods
  toggleEditModePassword(event: Event) {
    event.preventDefault();
    this.editModePassword = !this.editModePassword;
  }

  onSavePassword() {
    if (this.newPassword === this.confirmPassword) {
      // Save the new password
      console.log('Saved new password:', this.newPassword);

      // Reset form fields
      this.oldPassword = '';
      this.newPassword = '';
      this.confirmPassword = '';

      // Exit edit mode
      this.editModePassword = false;
    } else {
      alert('New password and confirm password do not match.');
    }
  }

  onCancelPassword() {
    this.editModePassword = false;

    // Reset form fields
    this.oldPassword = '';
    this.newPassword = '';
    this.confirmPassword = '';
  }

  //rest description

  restDescription: string;
  RestDescription = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s ' +
    'standard dummy text ever since the 1500s, when an unknown.';

  editModeRestDescription = false;

  toggleEditModeRestDescription(event: MouseEvent): void {
    event.preventDefault();
    this.editModeRestDescription = !this.editModeRestDescription;
    if (this.editModeRestDescription) {
      this.restDescription = this.RestDescription;
    }
  }

  onSaveRestDescription(): void {
    // Update the rest description
    this.RestDescription = this.restDescription;
    this.restDescription = '';
    this.editModeRestDescription = false;
  }

  onCancelRestDescription(): void {
    // Reset the rest description to its previous value
    this.editModeRestDescription = false;
    this.restDescription = '';
  }

  //languages
  languages:Language[] = [
    { value: 'English ' },
    { value: 'Sinhala ' },
    { value: 'Tamil ' },
  ];

  //meals
  meals:Meals[] = [
    { value: 'Breakfast ' },
    { value: 'Lunch ' },
    { value: 'Dinner ' },
  ];

  //payment
  chips: Chip[] = [
    { value: 'Method 1' },
    { value: 'Method 2' },
    { value: 'Method 3' },
    { value: 'Method 4' },
  ];

  //parking
  parking: Parking[] = [
    { value: 'Parking 1' },
    { value: 'Parking 2' },
    { value: 'Parking 3' },
    { value: 'Parking 4' },
  ];

  //atmosphere
  atmosphere: Atmosphere[] = [
    { value: 'Atmosphere 1' },
    { value: 'Atmosphere 2' },
    { value: 'Atmosphere 3' },
    { value: 'Atmosphere 4' },
  ];

  //additional
  additional: Additional[] = [
    { value: 'Additional 1' },
    { value: 'Additional 2' },
    { value: 'Additional 3' },
    { value: 'Additional 4' },
  ];


  ngOnInit(): void {
  }

}
