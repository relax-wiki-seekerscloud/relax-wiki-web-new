import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotel-profile-navbar',
  templateUrl: './hotel-profile-navbar.component.html',
  styleUrls: ['./hotel-profile-navbar.component.scss']
})
export class HotelProfileNavbarComponent implements OnInit {

  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigateByUrl(`/hotel-owner-profile/${route}`);
  }

  ngOnInit(): void {
  }

}
