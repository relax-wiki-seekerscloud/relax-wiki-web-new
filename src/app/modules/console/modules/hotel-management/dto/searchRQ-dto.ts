export class SearchRQDto {
  hotelLocation: string;
  hotelCheckin: Date;
  hotelCheckout: Date;
  numOfAdults: number;
  numOfChildren: number;
  hotelRooms: number;


  constructor(searchRQDto?: any) {

    this.hotelLocation=searchRQDto.hotelLocation || '';
    this.hotelCheckin=searchRQDto.hotelCheckin || '';
    this.hotelCheckout=searchRQDto.hotelCheckout || '';
    this.numOfAdults=searchRQDto.numOfAdults || '';
    this.numOfChildren=searchRQDto.numOfChildren || '';
    this.hotelRooms=searchRQDto.hotelRooms || '';

  }
}
