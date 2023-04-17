export class Room {
  public beds: Array<Bed> = [];
  constructor(
    public roomType: string,
    public roomName: string,
    // public roomNumber: number,
    // public numOfPeople: number,
  ) {
  }
}

export class Bed{
  constructor(
    public bedType:string,
    public num:number
  ) {
  }
}

export class HotelBasicInfo{}

export class RequestHotelListDTO {
  public rooms:Array<Room> = [];
  constructor(
    public hotelName: string,
    public starRating: string,
    public contactPersonName: string,
    public streetAddress: string,
    public addressLine2: string,
    public country: string,
    public city: string,
    public postalCode: string,
  ) {
  }
}
