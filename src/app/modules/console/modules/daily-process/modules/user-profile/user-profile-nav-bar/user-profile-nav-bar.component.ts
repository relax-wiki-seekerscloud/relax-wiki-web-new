import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile-nav-bar',
  templateUrl: './user-profile-nav-bar.component.html',
  styleUrls: ['./user-profile-nav-bar.component.scss']
})
export class UserProfileNavBarComponent implements OnInit {

  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigateByUrl(`/user-profile/${route}`);
  }

  ngOnInit(): void {
  }

}
