import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-profile-navbar',
  templateUrl: './restaurant-profile-navbar.component.html',
  styleUrls: ['./restaurant-profile-navbar.component.scss']
})
export class RestaurantProfileNavbarComponent implements OnInit {

  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigateByUrl(`/restaurant-owner-profile/${route}`);
  }

  ngOnInit(): void {
  }

}
