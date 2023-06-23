import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activity-navbar',
  templateUrl: './activity-navbar.component.html',
  styleUrls: ['./activity-navbar.component.scss']
})
export class ActivityNavbarComponent implements OnInit {

  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigateByUrl(`/activity-center-owner-profile/${route}`);
  }

  ngOnInit(): void {
  }

}
