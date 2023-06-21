import {GPHotel} from "../GP_Hotel/gp-hotel";

export class GPMostPopularHotels {

  Id:number;
  hotelInfo:GPHotel;
  viewCount:number;

  constructor(Id: number, hotelInfo: GPHotel, viewCount: number) {
    this.Id = Id;
    this.hotelInfo = hotelInfo;
    this.viewCount = viewCount;
  }


}
