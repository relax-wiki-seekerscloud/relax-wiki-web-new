import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-advertisement-default',
  templateUrl: './advertisement-default.component.html',
  styleUrls: ['./advertisement-default.component.scss'],
})
export class AdvertisementDefaultComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToPage(target: string) {
    this.router.navigate([target]);
  }
}
