import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entertainment-default',
  templateUrl: './entertainment-default.component.html',
  styleUrls: ['./entertainment-default.component.scss']
})
export class EntertainmentDefaultComponent implements OnInit {
  entLocation: string = '';
  entDate: Date = new Date();
  entPeople: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  searchEntertainmentActivities() {
    if (this.entPeople < 1) {
      alert("Number of people cannot be less than 1");
      return;
    }


    console.log(`Searching for entertainment activities in ${this.entLocation}...`);
    console.log(`Ent date: ${this.entDate}`);
    console.log(`Number of people: ${this.entPeople}`);


    // Perform the actual search and filtering of entertainment activities here, using the values from the input fields
  }

}
