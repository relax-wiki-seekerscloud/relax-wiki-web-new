import {Component, OnInit} from '@angular/core';
import {LocalStorage} from "ngx-webstorage";
import {SETTINGS} from "../../../../../share/settings/commons.settings";
import {Router} from "@angular/router";

@Component({
  selector: 'app-entertainment-default',
  templateUrl: './entertainment-default.component.html',
  styleUrls: ['./entertainment-default.component.scss']
})
export class EntertainmentDefaultComponent implements OnInit {
  entLocation: string = '';
  entDate: Date = new Date();
  entPeople: number = 1;

  @LocalStorage(SETTINGS.STORAGE.ENTERTAINMENT_SEARCH_DATA)
  entertainmentSearchData: any;

  constructor(private router: Router) {
  }

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

    let entertainmentSearchRQ = {
      location: `${this.entLocation}`,
      dateStr: `${this.entDate}`,
      numberOfPeople: `${this.entPeople}`,
    };

    this.entertainmentSearchData = entertainmentSearchRQ;

    this.router.navigate(['/entertainment-management/entertainment-list']);

    // Perform the actual search and filtering of entertainment activities here, using the values from the input fields
  }

}
