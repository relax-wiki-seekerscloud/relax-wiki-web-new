export class GP_Offers {

  offerId:number;
  offerName:string;
  offerDescription:string;


  constructor(offerId: number, offerName: string, offerDescription: string) {
    this.offerId = offerId;
    this.offerName = offerName;
    this.offerDescription = offerDescription;
  }
}
