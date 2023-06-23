import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TaxiCategory } from '../../taxi-list/taxi-category.model';
import { TaxiCategoryService } from '../../taxi-list/taxi-category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TaxiService } from '../../taxi-list-by-category/taxi.service';
import { Taxi } from '../../taxi-list-by-category/taxi.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-taxi-single-view',
  templateUrl: './taxi-single-view.component.html',
  styleUrls: ['./taxi-single-view.component.scss'],
})
export class TaxiSingleViewComponent implements OnInit {
  @ViewChild('destination') destination: ElementRef;
  @ViewChild('date') date: ElementRef;
  @ViewChild('pickupLocation') pickupLocation: ElementRef;
  @ViewChild('pickupTime') pickupTime: ElementRef;
  @ViewChild('peopleCount') peopleCount: ElementRef;
  @ViewChild('firstName') firstName: ElementRef;
  @ViewChild('lastName') lastName: ElementRef;
  @ViewChild('email') email: ElementRef;
  @ViewChild('request') request: ElementRef;

  districts = [
    'Ampara',
    'Anuradhapura',
    'Badulla',
    'Batticaloa',
    'Colombo',
    'Galle',
    'Gampaha',
    'Hambantota',
    'Jaffna',
    'Kalutara',
    'Kandy',
    'Kegalle',
    'Kilinochchi',
    'Kurunegala',
    'Mannar',
    'Matale',
    'Matara',
    'Monaragala',
    'Mullaitivu',
    'Nuwara Eliya',
    'Polonnaruwa',
    'Puttalam',
    'Ratnapura',
    'Trincomalee',
    'Vavuniya',
  ];

  id: number;
  dataLoaded: boolean = false;
  category: TaxiCategory = null;
  taxi: Taxi = null;
  val1: number;
  val2: number;
  dist: number = 0;
  price: number = 0;

  constructor(
    private dataService: TaxiCategoryService,
    private dataService2: TaxiService,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.loadData();
  }

  goToPage(target: string) {
    this.router.navigate([target]);
  }

  setDistance() {
    this.val1 = parseInt(this.pickupLocation.nativeElement.value);
    this.val2 = parseInt(this.destination.nativeElement.value);

    if (this.val1 == 0 || this.val2 == 0) {
      this.dist = 0;
      this.price = 0;
      return;
    }
    this.val2 = this.val2 * 5 + 6;

    if (this.val1 > this.val2) {
      this.dist = this.val1 - this.val2;
    } else {
      this.dist = this.val2 - this.val1;
    }

    this.price =
      parseInt(this.category.fairPerKm) * this.dist +
      parseInt(this.category.baseFair);
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
    const regEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const regName = /^[A-Z a-z]+$/; // first name last name
    const regSpecial = /^[A-Z a-z 0-9]+$/;
    const regPeopleCount = /^[0-4]$/;

    if (
      this.pickupLocation.nativeElement.value == '' ||
      this.pickupLocation.nativeElement.value == 0
    ) {
      this.showSnackbar('You have to select a pickup location to continue.');
      return false;
    }
    if (
      this.destination.nativeElement.value == '' ||
      this.destination.nativeElement.value == 0
    ) {
      this.showSnackbar('You have to select a destination to continue.');
      return false;
    }

    if (this.date.nativeElement.value == '') {
      this.showSnackbar('You have to select a date to continue.');
      return false;
    }
    if (this.pickupTime.nativeElement.value == '') {
      this.showSnackbar('You have to select a pickup time to continue.');
      return false;
    }

    if (this.peopleCount.nativeElement.value == '') {
      this.showSnackbar(
        'You have to fill the "Number of people" field to continue.'
      );
      return false;
    }
    if (
      parseInt(this.peopleCount.nativeElement.value) > this.category.maxPeople
    ) {
      this.showSnackbar(
        '"Number of people" field accepts only 1-' + this.category.maxPeople
      );
      return false;
    }

    if (this.email.nativeElement.value == '') {
      this.showSnackbar('You have to fill the "Email" field to continue.');
      return false;
    }
    if (!regEmail.test(this.email.nativeElement.value)) {
      this.showSnackbar('"Email" field accepts only valid email address');
      return false;
    }
    if (this.firstName.nativeElement.value == '') {
      this.showSnackbar('You have to fill the "First Name" field to continue.');
      return false;
    }
    if (!regName.test(this.firstName.nativeElement.value)) {
      this.showSnackbar('"First Name" field accepts only A-Z a-z');
      return false;
    }
    if (this.lastName.nativeElement.value == '') {
      this.showSnackbar('You have to fill the "Last Name" field to continue.');
      return false;
    }
    if (!regName.test(this.lastName.nativeElement.value)) {
      this.showSnackbar('"First Name" field accepts only A-Z a-z');
      return false;
    }
    if (!(this.request.nativeElement.value == '')) {
      if (!regSpecial.test(this.request.nativeElement.value)) {
        this.showSnackbar('"Special Request" field accepts only A-Z a-z 0-9');
        return false;
      }
    }

    return true;
  }

  submitForm() {
    if (!this.dataValidated()) {
      return;
    }
    const formData = {
      destination:
        this.districts[parseInt(this.destination.nativeElement.value)],
      date: this.date.nativeElement.value,
      pickupLocation:
        this.districts[parseInt(this.pickupLocation.nativeElement.value)],
      pickupTime: this.pickupTime.nativeElement.value,
      peopleCount: this.peopleCount.nativeElement.value,
      firstName: this.firstName.nativeElement.value,
      lastName: this.lastName.nativeElement.value,
      email: this.email.nativeElement.value,
      request: this.request.nativeElement.value,
      distance: this.dist,
      price: this.price,
      vehicleId: this.id,
    };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    this.http
      .post<any>('http://localhost:8080/booking', formData, { headers })
      .subscribe(
        (response) => {
          this.goToPage(
            '/taxi-rental-management/taxi-booking-summary/' + response.id
          );
        },
        (error) => {
          // Handle any errors
          console.error(error);
        }
      );
  }

  loadData(): void {
    this.dataService2.getData(this.id).subscribe(
      (data: Taxi) => {
        this.taxi = data;
        this.dataService.getData(this.taxi.category).subscribe(
          (data: TaxiCategory) => {
            this.category = data;
            this.dataLoaded = true;
          },
          (error) => {
            console.log('Error retrieving data:', error);
          }
        );
      },
      (error) => {
        console.log('Error retrieving data:', error);
      }
    );
  }
}
