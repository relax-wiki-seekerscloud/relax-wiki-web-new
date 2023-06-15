export class RequestEntertainmentListDTO {

  public photoUrls:Array<string>=[];
  public facilities: Array<string> = [];
  public activities: Array<string> = [];
  public packages: Array<string> = [];
  public languages: Array<string> = [];
  public bookingCancelPeriod:string;
  public bookingCancelCharge:string;
  public paymentMethods:Array<string>=[];
  public transportationMethods: Array<string> = [];
  public mealsProvided: Array<string> = [];
  public entertainmentCategory: string;
  public openTimeFrom: string;
  public openTimeTo: string;
  public lowestRateForOnePerson: string;
  constructor(
    public activityCenterName: string,
    public activityCenterDesc: string,
    public contactPersonName: string,
    public streetAddress: string,
    public addressLine2: string,
    public country: string,
    public city: string,
    public postalCode: string,
  ) {
  }
}

export class EntertainmentMoreInfo {

  constructor(
    public transportationMethods: Array<string> = [],
    public mealsProvided: Array<string> = [],
    public entertainmentCategory: string,
    public openTimeFrom: string,
    public openTimeTo: string,
    public lowestRateForOnePerson: string,
  ) {
  }
}

export class EntertainmentFacilities {
  constructor(
    public facilities: Array<string> = [],
    public activities: Array<string> = [],
    public packages: Array<string> = [],
    public languages: Array<string> = [],
  ) {
  }
}

export class EntertainmentPolicy{
  constructor(
    public bookingCancelPeriod:string,
    public bookingCancelCharge:string,
    public paymentMethods:Array<string>=[],
  ) {
  }
}
