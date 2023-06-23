export class SETTINGS {
  public static ENDPOINTS = {
    searchHotels: {
      url: 'api/hotel/searchHotels',
      type: 'POST'
    },
    findHotelByID: {
      url: 'api/hotel/findHotelByID',
      type: 'GET'
    },
    searchRestaurants: {
      url: 'api/restaurant/searchRestaurants',
      type: 'POST'
    },
    findRestaurantByID: {
      url: 'api/restaurant/findRestaurantByID',
      type: 'GET'
    },
    searchEntertainments: {
      url: 'api/entertainment/searchEntertainments',
      type: 'POST'
    },
    findEntertainmentByID: {
      url: 'api/entertainment/findEntertainmentByID',
      type: 'GET'
    },
    hotelBooking: {
      url: 'api/hotel/hotelBooking',
      type: 'POST'
    },
    entertainmentBooking: {
      url: 'api/entertainment/entertainmentBooking',
      type: 'POST'
    },
  };

  public static RequestStatus = {
    SUCCESS: 'SUCCESS',
    FAILED: 'FAILED'
  };

  public static HotelCondition = {
    GOOD: 'Good',
    VERY_GOOD: 'Very Good',
    EXCELLENT: 'Excellent',
  };

  public static YesNo = {
    Y: 'Yes',
    N: 'No'
  };

  public static StarCategory = {
    ONE: 1,
    TWO: 2,
    THREE: 3,
    FOUR: 4,
    FIVE: 5,
    NOT_RATED: -1,
  };

  public static STORAGE = {
    SELECTED_HOTEL_ID: 'ZZxdGgO_',
    SELECTED_RESTAURANT_ID: 'caadsncj',
    RESTAURANT_SEARCH_DATA: 'ZZxdG2a',
    SELECTED_ENTERTAINMENT_ID: 'cascsd',
    ENTERTAINMENT_SEARCH_DATA: 'ZZxscswdG2a',
    SELECTED_HOTEL_DATA_FOR_BOOKING:'xMQ3P5o8om',
    SELECTED_ENTERTAINMENT_DATA_FOR_BOOKING:'Sm4JWnXfsw',
    SELECTED_HOTEL_ROOM_TYPE_DATA_FOR_BOOKING:'c77ZD0zfjv',
    FILTER_BY_BUDGET_DATA_ARR:'Hz5ay9N46X',
    FILTER_BY_RATINGS_DATA_ARR:'SCEu317WLW',
    FILTER_BY_ACTIVITIES_DATA_ARR:'HG4PxsxAfZ',

  }
}
