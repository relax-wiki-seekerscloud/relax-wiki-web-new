export class RequestEntertainmentListDTO {
  public entertainmentMoreInfo: Array<EntertainmentMoreInfo> = [];
  public entertainmentFacilities: Array<EntertainmentFacilities> = [];
  public entertainmentPhotosUrl:Array<string>=[];
  public entertainmentPolicies:Array<EntertainmentPolicy>=[];

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
    public servedMeals: Array<string> = [],
    public entertainmentCategory: string,
    public openTimeFrom: string,
    public openTimeTo: string,
    public pricePerPerson: string,
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
    public payment:Array<string>=[],
  ) {
  }
}
