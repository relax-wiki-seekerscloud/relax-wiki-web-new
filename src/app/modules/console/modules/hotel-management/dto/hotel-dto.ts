export class HotelDto {

  hotelID;
  address;
  hotelName;
  mainDescription;
  subDescriptionOne;
  subDescriptionTwo;
  hotelCondition;
  price;
  numberOfRooms;
  starCategory;
  hasFreeCancellation;
  hasFreeWifi;
  hasCityView;
  hasAirConditioning;
  hasBathtub;
  hasSafetyDepositBox;
  hasParkingOnSite;
  hasSwimmingPool;
  hotelImageList;
  hotelRoomTypeList;
  hotelReviewList;

  constructor(hotelDto?: any) {
    hotelDto = hotelDto || {};

    this.hotelID = hotelDto.hotelID || '';
    this.hotelID = hotelDto.hotelID || '';
    this.address = hotelDto.address || '';
    this.hotelName = hotelDto.hotelName || '';
    this.mainDescription = hotelDto.mainDescription || '';
    this.subDescriptionOne = hotelDto.subDescriptionOne || '';
    this.subDescriptionTwo = hotelDto.subDescriptionTwo || '';
    this.hotelCondition = hotelDto.hotelCondition || '';
    this.price = hotelDto.price || '';
    this.numberOfRooms = hotelDto.numberOfRooms || '';
    this.starCategory = hotelDto.starCategory || '';
    this.hasFreeCancellation = hotelDto.hasFreeCancellation || '';
    this.hasFreeWifi = hotelDto.hasFreeWifi || '';
    this.hasCityView = hotelDto.hasCityView || '';
    this.hasAirConditioning = hotelDto.hasAirConditioning || '';
    this.hasBathtub = hotelDto.hasBathtub || '';
    this.hasSafetyDepositBox = hotelDto.hasSafetyDepositBox || '';
    this.hasParkingOnSite = hotelDto.hasParkingOnSite || '';
    this.hasSwimmingPool = hotelDto.hasSwimmingPool || '';
    this.hotelImageList = hotelDto.hotelImageList || [];
    this.hotelRoomTypeList = hotelDto.hotelRoomTypeList || [];
    this.hotelReviewList = hotelDto.hotelReviewList || [];
  }
}
