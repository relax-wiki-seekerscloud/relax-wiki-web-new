import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent  {

  // Define properties for user's personal details
  [key: string]: any;

  firstName: string = 'John';
  lastName: string = 'Doe';
  displayName: string = 'John';
  emailAddress = 'abc@gmail.com';

  phoneNumber = 'Add your phone number';
  isPhoneFieldEmpty = true;


  dateOfBirth: { day: string; month: string; year: string } = {
    day: '00',
    month: '00',
    year: '0000',
  };

  gender: string = 'Add gender';

  address: string = "";
  townCity: string = "";
  regionCountry: string = "";


  oldPassword: string = '';
  newPassword: string = '';
  confirmPassword: string = '';

  // Define a method to get the value of a field
  getField(field: string): any {
    const parts = field.split('.');
    return parts.length === 2 ? this[parts[0]][parts[1]] : this[field];
  }

  // Define a method to set the value of a field
  setField(field: string, value: any): void {
    const parts = field.split('.');
    if (parts.length === 2) {
      this[parts[0]][parts[1]] = value;
    } else {
      this[field] = value;
    }
  }

  // Define an array of field objects for the form
  fields: any[] = [
    {
      title: 'Name',
      content: () => `${this.firstName} ${this.lastName}`,
      isEditing: false,
      inputWrapperClass: 'name-inputs-wrapper',
      inputFields: [
        {
          label: 'First Name',
          model: 'firstName',
          type: 'text'
        },
        {
          label: 'Last Name',
          model: 'lastName',
          type: 'text'
        }
      ]
    },

    {
      title: 'Display Name',
      content: () => this.displayName,
      isEditing: false,
      inputFields: [
        {
          label: 'Display Name',
          model: 'displayName',
          type: 'text'
        }
      ]
    },

    {
      title: 'Email Address',
      content: () => this.emailAddress,
      isEditing: false,
      inputFields: [
        {
          label: 'Email Address',
          model: 'emailAddress',
          type: 'text'
        }
      ]
    },

    {
      title: 'Phone Number',
      content: () => this.isPhoneFieldEmpty ? 'Add your phone number' : this.phoneNumber,
      isEditing: false,
      inputFields: [
        {
          label: 'Phone Number',
          model: 'phoneNumber',
          type: 'text'
        }
      ]
    },

    {
      title: 'Date of Birth',
      content: () => this.dateOfBirth.year === '0000' ? 'Add your Birthday' : `${this.dateOfBirth.year}-${this['getMonthName'](this.dateOfBirth.month)}-${this.dateOfBirth.day}`,
      isEditing: false,
      inputFields: [
        {
          label: 'Day',
          model: 'dateOfBirth.day',
          type: 'number'
        },
        {
          label: 'Month',
          model: 'dateOfBirth.month',
          type: 'select',
          options: this['getMonthOptions']()
        },
        {
          label: 'Year',
          model: 'dateOfBirth.year',
          type: 'select',
          options: this['getYearRange'](1900, 2023)
        }
      ]
    },

    {
      title: 'Gender',
      content: () => this.gender,
      isEditing: false,
      inputFields: [
        {
          label: 'Gender',
          model: 'gender',
          type: 'select',
          options: this['getGenderOptions']()
        }
      ]
    },

    {
      title: 'Address',
      content: () => this.address === "" && this.townCity === "" && this.regionCountry === "" ? 'Add your address' : `${this.address} ${this.townCity} ${this.regionCountry}`,
      isEditing: false,
      inputFields: [
        {
          label: 'Address',
          model: 'address',
          type: 'text'
        },
        {
          label: 'Town/City',
          model: 'townCity',
          type: 'text'
        },
        {
          label: 'Region/Country',
          model: 'regionCountry',
          type: 'select',
          options: this['getCountries']()
        }
      ]
    },


    {
      title: 'Password',
      content: () => '******',
      isEditing: false,
      inputFields: [
        {
          label: 'Old Password',
          model: 'oldPassword',
          type: 'password'
        },
        {
          label: 'New Password',
          model: 'newPassword',
          type: 'password'
        },

        {
          label: 'Confirm Password',
          model: 'confirmPassword',
          type: 'password'
        },

      ]
    }

  ];

  // Define a method to get month options for the date of birth field
  getMonthOptions(): { value: string; name: string }[] {
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return monthNames.map((name, index) => ({value: (index + 1).toString(), name}));
  }
  // Define a method to get the month name for the date of birth field
  getMonthName(index: string): string {
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return monthNames[parseInt(index, 10) - 1];
  }

  // Define a method to get a range of years for the date of birth field
  getYearRange(start: number, end: number): {value: number, name: number}[] {
    return Array.from({length: end - start + 1}, (_, i) => {
      const year = start + i;
      return { value: year, name: year };
    });
  }

  // Define a method to get gender options for the gender field
  getGenderOptions(): {value: string, name: string}[] {
    return [
      { value: 'Female', name: 'Female' },
      { value: 'Male', name: 'Male' },
      { value: 'Other', name: 'Other' }
    ];
  }


  // Define a method to get a list of countries for the address field
  getCountries(): { value: string; name: string }[] {
    return [
      { value: 'US', name: 'United States' },
      { value: 'CA', name: 'Canada' },
      { value: 'UK', name: 'United Kingdom' },
      { value: 'LK', name: 'Sri Lanka' },
    ];
  }


  // Define a method to enable the editing mode for a field
  enableEdit(field: any) {
    if (field.title === 'Phone Number' && this.isPhoneFieldEmpty) {
      this.isPhoneFieldEmpty = false;
      this.phoneNumber = '';
    }
    field.isEditing = true;
  }

  save(field: any) {
    field.isEditing = false;
  }

  cancel(field: any) {
    field.isEditing = false;
  }

  // Define a method to handle mouse over events for a field
  onMouseOver(field: any) {
    field.isHovered = true;
  }

  // Define a method to handle mouse out events for a field
  onMouseOut(field: any) {
    field.isHovered = false;
  }

  profileImageUrl? : string;


  constructor() {
    this.profileImageUrl = 'https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png';
  }

  isProfileImageHovered: boolean = false;

  // Define a method to handle the mouse enter event on the profile image
  onProfileImageMouseEnter() {
    this.isProfileImageHovered = true;
  }


  // handle the mouse leave event on the profile image
  onProfileImageMouseLeave() {
    this.isProfileImageHovered = false;
  }

  // Define a method to trigger the file input element for profile image upload
  addProfileImage(profileImageInput: HTMLInputElement) {
    profileImageInput.click();
  }

  handleProfileImageChange(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {     // Check if a file has been selected
      const file = fileInput.files[0];

    }
  }
}

