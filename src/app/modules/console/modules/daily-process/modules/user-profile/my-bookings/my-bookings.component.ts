import {Component, OnInit,  } from '@angular/core';

// Define the interface for PeriodicElement
export interface PeriodicElement {
  place: string;
  position: number;
  checkIn: string;
  checkOut: string;
  totAmount: string;
  reason?: string;
  cancelledDate?: string;
  refundAmount?: string;
}


// Mock data for upcoming, completed, and cancelled bookings
const MOCK_UPCOMING_BOOKINGS: PeriodicElement[] = [
  { position: 1, place: 'Place name', checkIn: '02-01-2023', checkOut: '05-01-2023', totAmount: '$100'},
  { position: 2, place: 'Place name', checkIn: '02-01-2023', checkOut: '05-01-2023', totAmount: '$100' },
  { position: 3, place: 'Place name', checkIn: '02-01-2023', checkOut: '05-01-2023', totAmount: '$100' },

];

const MOCK_COMPLETED_BOOKINGS: PeriodicElement[] = [
  { position: 1, place: 'Place name', checkIn: '02-01-2023', checkOut: '05-01-2023', totAmount: '$100' },
  { position: 2, place: 'Place name', checkIn: '02-01-2023', checkOut: '05-01-2023', totAmount: '$100' },
  { position: 3, place: 'Place name', checkIn: '02-01-2023', checkOut: '05-01-2023', totAmount: '$100' },

];

const MOCK_CANCELLED_BOOKINGS: PeriodicElement[] = [
  { position: 1, place: 'Place name', checkIn: '02-01-2023', checkOut: '05-01-2023', totAmount: '$100', reason: 'Cancelled due to some reason', cancelledDate: '23-03-2023', refundAmount: '$50' },
  { position: 2, place: 'Place name', checkIn: '02-01-2023', checkOut: '05-01-2023', totAmount: '$100', reason: 'Cancelled due to some reason', cancelledDate: '23-03-2023', refundAmount: '$50' },
  { position: 3, place: 'Place name', checkIn: '02-01-2023', checkOut: '05-01-2023', totAmount: '$100', reason: 'Cancelled due to some reason', cancelledDate: '23-03-2023', refundAmount: '$50' },
];

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.scss'],
})

export class MyBookingsComponent {


  selectedType: string = 'upcoming';

  // Function to handle navigation link click
  onNavLinkClick(type: string) {
    console.log('Clicked:', type);
    this.selectedType = type;
  }


  // Define columns for upcoming and completed bookings
  columns = [
    {
      columnDef: 'position',
      header: 'No.',
      cell: (element: PeriodicElement) => `${element.position}`,
    },
    {
      columnDef: 'place',
      header: 'Place',
      cell: (element: PeriodicElement) => `${element.place}`,
    },
    {
      columnDef: 'checkIn',
      header: 'Check In',
      cell: (element: PeriodicElement) => `${element.checkIn}`,
    },
    {
      columnDef: 'checkOut',
      header: 'Check Out',
      cell: (element: PeriodicElement) => `${element.checkOut}`,
    },
    {
      columnDef: 'totAmount',
      header: 'Total Amount',
      cell: (element: PeriodicElement) => `${element.totAmount}`,
    },
  ];

  // Define columns for cancelled bookings
  cancelledColumns = [
    {
      columnDef: 'position',
      header: 'No.',
      cell: (element: PeriodicElement) => `${element.position}`,
    },
    {
      columnDef: 'place',
      header: 'Place',
      cell: (element: PeriodicElement) => `${element.place}`,
    },
    {
      columnDef: 'reason',
      header: 'Reason for Cancellation',
      cell: (element: PeriodicElement) => `${element.reason}`,
    },
    {
      columnDef: 'cancelledDate',
      header: 'Cancelled Date',
      cell: (element: PeriodicElement) => `${element.cancelledDate}`,
    },
    {
      columnDef: 'refundAmount',
      header: 'Refund Amount',
      cell: (element: PeriodicElement) => `${element.refundAmount}`,
    },
  ];

  // Assign mock data to data sources
  dataSource = MOCK_UPCOMING_BOOKINGS;
  dataSourceCompleted = MOCK_COMPLETED_BOOKINGS;
  dataSourceCancelled = MOCK_CANCELLED_BOOKINGS;

  // Define displayed columns for different booking types
  displayedColumns = this.columns.map(c => c.columnDef);
  displayedColumnsCompleted = this.columns.map(c => c.columnDef).concat('review');
  displayedColumnsCancelled = this.cancelledColumns.map(c => c.columnDef);


  // Function to handle 'Add Review' button click
  addReview(element: PeriodicElement) {
    console.log('Add Review clicked for element:', element);
  }

}
