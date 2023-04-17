
import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';



export interface Chip {
  value: string;
}

export interface Language extends Chip {}

export interface Service extends Chip {}

export interface Amenity extends Chip {}

export interface Oamenity extends Chip {}




@Component({
  selector: 'app-basic-information',
  templateUrl: './basic-information.component.html',
  styleUrls: ['./basic-information.component.scss']
})
export class BasicInformationComponent implements OnInit {

  @ViewChild('saveButton', { static: false }) saveButton!: ElementRef;
  @ViewChild('cancelButton', { static: false }) cancelButton!: ElementRef;

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

  //hotel description

  hotelDescription: string;
  HotelDescription = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s ' +
    'standard dummy text ever since the 1500s, when an unknown.';

  editModeHotelDescription = false;

  toggleEditModeHotelDescription(event: MouseEvent): void {
    event.preventDefault();
    this.editModeHotelDescription = !this.editModeHotelDescription;
    if (this.editModeHotelDescription) {
      this.hotelDescription = this.HotelDescription;
    }
  }

  onSaveHotelDescription(): void {
    // Update the hotel description
    this.HotelDescription = this.hotelDescription;
    this.hotelDescription = '';
    this.editModeHotelDescription = false;
  }

  onCancelHotelDescription(): void {
    // Reset the hotel description to its previous value
    this.editModeHotelDescription = false;
    this.hotelDescription = '';
  }


//languages
  languages:Language[] = [
    { value: 'English ' },
    { value: 'Sinhala ' },
    { value: 'Tamil ' },
  ];

  //facilities
  chips: Chip[] = [
    { value: 'Facility 1' },
    { value: 'Facility 2' },
    { value: 'Facility 3' },
    { value: 'Facility 4' },
    { value: 'Facility 5' },
    { value: 'Facility 6' },
    { value: 'Facility 7' },
  ];

  //services
  services: Service[] = [
    { value: 'Service 1' },
    { value: 'Service 2' },
    { value: 'Service 3' },
    { value: 'Service 4' },
    { value: 'Service 5' },
    { value: 'Service 6' },
  ];

  //common amenities
  amenities: Amenity[] = [
    { value: 'Amenity 1' },
    { value: 'Amenity 2' },
    { value: 'Amenity 3' },
    { value: 'Amenity 4' },
    { value: 'Amenity 5' },
    { value: 'Amenity 6' },
  ];

  //other amenities
  oamenities: Oamenity[] = [
    { value: 'Amenity 1' },
    { value: 'Amenity 2' },
    { value: 'Amenity 3' },
    { value: 'Amenity 4' },
    { value: 'Amenity 5' },
    { value: 'Amenity 6' },
  ];


  constructor() {
    this.hotelDescription = '';
  }

  ngOnInit(): void {
  }
}
