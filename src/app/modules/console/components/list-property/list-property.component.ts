import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-list-property',
  templateUrl: './list-property.component.html',
  styleUrls: ['./list-property.component.scss']
})
export class ListPropertyComponent implements OnInit {

  constructor(private router:Router) { }
  goToListHotel(){
    console.log('hi')
    this.router.navigate(['/console/hotel-management/hotel-registration/hotel-basic-info']).then();
  }

  goToListRestaurant(){
    this.router.navigate(['/console/restaurant-management/restaurant-registration/restaurant-basic-info']).then();

  }

  goToListEntertainment(){
    this.router.navigate(['/console/entertainment-management/entertainment-registration/entertainment-basic-info']).then();

  }


  ngOnInit(): void {
  }

}
