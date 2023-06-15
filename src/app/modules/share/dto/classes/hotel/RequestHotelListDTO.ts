export class Room {
  public beds: Array<Bed> = [];

  constructor(
    public roomType: string,
    public roomName: string,
    public roomSize: string,
    public customRoomName: string,
    public noOfPeople: string,
    public roomCountFromRoomType: string,
    public smokingPolicy: string,
    public bedroomCount: string,
    public livingRoomCount: string,
    public bathroomCount: string,
    public pricePerNight: string,
  ) {
  }
}

export class Bed {
  constructor(
    public bedType: string,
    public num: string
  ) {
  }
}

export class Policy {
  constructor(
    public bookingCancelPeriod: string,
    public bookingCancelCharge: string,
    public pets: string,
    public petsCharge: string,
    public checkInTimeFrom: string,
    public checkInTimeTo: string,
    public checkOutTimeFrom: string,
    public checkOutTimeTo: string,
  ) {
  }
}

export class RequestHotelListDTO {
  public rooms: Array<Room> = [];
  public facilities: Array<string> = [];
  public services: Array<string> = [];
  public languages: Array<string> = [];
  public mostCommonAmenities: Array<string> = [];
  public roomAmenities: Array<string> = [];
  public foodAndDrinkAmenities: Array<string> = [];
  public entertainmentAndFamilyServicesAmenities: Array<string> = [];
  public mediaAndTechnologyAmenities: Array<string> = [];
  public bathroomAmenities: Array<string> = [];
  public roomAccessibilityAmenities: Array<string> = [];
  public safetyAndSecurityAmenities: Array<string> = [];
  public outdoorAmenities: Array<string> = [];
  public servicesAndExtrasAmenities: Array<string> = [];
  public photoUrls: Array<string> = [];
  public bookingCancelPeriod: string;
  public bookingCancelCharge: string;
  public pets: boolean;
  public petsCharge: string;
  public checkInTimeFrom: string;
  public checkInTimeTo: string;
  public checkOutTimeFrom: string;
  public checkOutTimeTo: string;
  public paymentMethods: Array<string> = [];

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

