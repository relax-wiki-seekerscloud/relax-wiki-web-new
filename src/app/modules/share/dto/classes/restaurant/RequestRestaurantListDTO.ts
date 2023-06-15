export class RequestRestaurantListDTO {

  public photoUrls:Array<string> = [];
  public offeredCuisine: Array<string> = [];
  public mealsServed: Array<string> = [];
  public restaurantCategory: string;
  public openTimeFrom: string;
  public openTimeTo: string;
  public paymentMethods: Array<string> = [];
  public parking: Array<string> = [];
  public atmosphere: Array<string> = [];
  public additional: Array<string> = [];
  constructor(
    public restaurantName: string,
    public restaurantDesc: string,
    public contactPersonName: string,
    public streetAddress: string,
    public addressLine2: string,
    public country: string,
    public city: string,
    public postalCode: string,
  ) {
  }
}

export class RestaurantMoreInfo {
  constructor(
    public offeredCuisine: Array<string> = [],
    public mealsServed: Array<string> = [],
    public restaurantCategory: string,
    public openTimeFrom: string,
    public openTimeTo: string,
  ) {
  }
}

export class RestaurantFeatures {
  constructor(
    public paymentMethods: Array<string> = [],
    public parking: Array<string> = [],
    public atmosphere: Array<string> = [],
    public additional: Array<string> = [],
  ) {
  }
}
