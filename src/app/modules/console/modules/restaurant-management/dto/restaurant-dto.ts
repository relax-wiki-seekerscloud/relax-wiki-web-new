export class RestaurantDto {

  restaurantID;
  restaurantName;
  address;
  restaurantCondition;
  starCategory;
  hasFreeCancellation;
  restaurantImageDTOList;
  restaurantReviewDTOList;
  restaurantFoodCategoryDTOList;

  constructor(restaurantDto?: any) {
    restaurantDto = restaurantDto || {};

    this.restaurantID = restaurantDto.restaurantID || '';
    this.restaurantName = restaurantDto.restaurantName || '';
    this.address = restaurantDto.address || '';
    this.starCategory = restaurantDto.starCategory || '';
    this.restaurantCondition = restaurantDto.restaurantCondition || '';
    this.hasFreeCancellation = restaurantDto.hasFreeCancellation || '';
    this.restaurantImageDTOList = restaurantDto.restaurantImageDTOList || [];
    this.restaurantReviewDTOList = restaurantDto.restaurantReviewDTOList || [];
    this.restaurantFoodCategoryDTOList = restaurantDto.restaurantFoodCategoryDTOList || [];
  }
}
