export class GPHotel {

  regId:string;
  address:string;
  description:string;
  hotelName:string;
  imagePath:string;

  constructor(regId: string, address: string, description: string, hotelName: string, imagePath: string) {
    this.regId = regId;
    this.address = address;
    this.description = description;
    this.hotelName = hotelName;
    this.imagePath = imagePath;
  }
}
