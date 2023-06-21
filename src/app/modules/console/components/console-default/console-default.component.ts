import {Component, OnInit} from '@angular/core';
import {GPRecenltyViewedHotel} from "./Entities/GP_RecenltyViewedHotel/gp-recenlty-viewed-hotel";
import {ConsolePageService} from "./Entities/console-page.service";
import {GPHotel} from "./Entities/GP_Hotel/gp-hotel";
import {HttpClient} from "@angular/common/http";
import {GP_Offers} from "./Entities/GP_Offers/GP_Offers";
import {GPMostPopularHotels} from "./Entities/GP_MostPopularHotels/gp-most-popular-hotels";

@Component({
  selector: 'app-console-default',
  templateUrl: './console-default.component.html',
  styleUrls: ['./console-default.component.scss']
})
export class ConsoleDefaultComponent implements OnInit{


  chat_trigger=true;

  gpOffers:GP_Offers[];
  gpOffer1:GP_Offers;
  gpOffer2:GP_Offers;

  allPopularHotels:GPMostPopularHotels[];
  popularHotel1:GPMostPopularHotels;
  popularHotel2:GPMostPopularHotels;
  popularHotel3:GPMostPopularHotels;
  popularHotel4:GPMostPopularHotels;
  popularHotel5:GPMostPopularHotels;

  recentlyViewedHotel1:GPRecenltyViewedHotel;
  recentlyViewedHotel2:GPRecenltyViewedHotel;
  recentlyViewedHotel3:GPRecenltyViewedHotel;
  recentlyViewedHotel4:GPRecenltyViewedHotel;

  recentlyViewedHotels:GPRecenltyViewedHotel[];


  constructor(private consolePageService:ConsolePageService,private httpClient:HttpClient) {
  }

  ngOnInit(): void {
    this.httpClient.get<GPRecenltyViewedHotel[]>(`http://localhost:8080/api/gphotel/erecentltyViewed/U001`).subscribe(data => {
      this.recentlyViewedHotels = data;
      this.recentlyViewedHotel1 = this.recentlyViewedHotels[0];
      this.recentlyViewedHotel2 = this.recentlyViewedHotels[1];
      this.recentlyViewedHotel3 = this.recentlyViewedHotels[2];
      this.recentlyViewedHotel4 = this.recentlyViewedHotels[3];
    });

    this.httpClient.get(`http://localhost:8080/api/offer/getOffers`).subscribe(data => {
      //@ts-ignore
      this.gpOffers = data;
      this.gpOffer1 = this.gpOffers[0];
      this.gpOffer2 = this.gpOffers[1];
    })

    this.httpClient.get(`http://localhost:8080/api/mostPopularHotels/gelMostPopularHotels`).subscribe(data => {
      //@ts-ignore
      this.allPopularHotels = data;
      console.log(this.allPopularHotels);
      this.popularHotel1 = this.allPopularHotels[0];
      this.popularHotel2 = this.allPopularHotels[1];
      this.popularHotel3 = this.allPopularHotels[2];
      this.popularHotel4 = this.allPopularHotels[3];
      this.popularHotel5 = this.allPopularHotels[4];
    })

  }


}
