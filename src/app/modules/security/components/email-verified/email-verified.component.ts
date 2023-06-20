import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-email-verified',
  templateUrl: './email-verified.component.html',
  styleUrls: ['./email-verified.component.scss']
})
export class EmailVerifiedComponent implements OnInit {

  constructor(private router:Router) { }
  go(){
    this.router.navigate(['/console/list-property/']).then();
  }
  ngOnInit(): void {
  }

}
