export class RequestRestaurantListDTO {

  public restaurantMoreInfo: Array<RestaurantMoreInfo> = [];
  public restaurantFeatures:Array<RestaurantFeatures>=[];
  public photos:Array<string> = [];
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
    public servedMeals: Array<string> = [],
    public restaurantCategory: string,
    public openTimeFrom: string,
    public openTimeTo: string,
  ) {
  }
}

export class RestaurantFeatures {
  constructor(
    public payments: Array<string> = [],
    public parking: Array<string> = [],
    public atmosphere: Array<string> = [],
    public additional: Array<string> = [],
  ) {
  }
}
