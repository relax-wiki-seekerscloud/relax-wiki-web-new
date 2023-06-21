import {GPHotel} from "../GP_Hotel/gp-hotel";
import {GPUser} from "../GP_User/gp-user";

export class GPRecenltyViewedHotel {

  loginId:number;
  hotelInfo:GPHotel;
  gpUser:GPUser;


  constructor(loginId: number, hotelInfo: GPHotel, gpUser: GPUser) {
    this.loginId = loginId;
    this.hotelInfo = hotelInfo;
    this.gpUser = gpUser;
  }


}
