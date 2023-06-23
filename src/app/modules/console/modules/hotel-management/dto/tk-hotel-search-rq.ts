export class TKHotelSearchRQ {

  hotelRooms: number;
  price: number;

  constructor(tkHotelSearchRQ?:any) {

    tkHotelSearchRQ=tkHotelSearchRQ || {};

    this.hotelRooms=tkHotelSearchRQ.hotelRooms || '';
    this.price=tkHotelSearchRQ.price || '';
  }



}
