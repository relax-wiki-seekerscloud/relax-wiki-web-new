import { Component, OnInit } from '@angular/core';
import {GP_Offers} from "../console-default/Entities/GP_Offers/GP_Offers";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {

  constructor(private httpClient:HttpClient) { }

  gpOffers:GP_Offers[];
  gpOffer1:GP_Offers;
  gpOffer2:GP_Offers;

  ngOnInit(): void {

    this.httpClient.get(`http://localhost:8080/api/offer/getOffers`).subscribe(data => {
      //@ts-ignore
      this.gpOffers = data;
      this.gpOffer1 = this.gpOffers[0];
      this.gpOffer2 = this.gpOffers[1];
    })

  }

}
