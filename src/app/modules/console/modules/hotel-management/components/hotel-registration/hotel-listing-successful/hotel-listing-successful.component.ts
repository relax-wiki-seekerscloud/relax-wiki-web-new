import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-hotel-listing-successful',
  templateUrl: './hotel-listing-successful.component.html',
  styleUrls: ['./hotel-listing-successful.component.scss']
})
export class HotelListingSuccessfulComponent implements OnInit {
  @Input() userName:string;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  newListing(){
    this.router.navigate(['/console/hotel-management/hotel-registration/hotel-basic-info']).then();
  }
}
