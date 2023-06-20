import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-entertainment-listing-successful',
  templateUrl: './entertainment-listing-successful.component.html',
  styleUrls: ['./entertainment-listing-successful.component.scss']
})
export class EntertainmentListingSuccessfulComponent implements OnInit {
  @Input() userName:string;
  constructor() { }

  ngOnInit(): void {
  }

}
