export class TaxiCategory {
  id: number;
  name: string;
  baseFair: string;
  waitingFair: string;
  fairPerKm: string;
  image: string;
  maxPeople: number;

  constructor(
    id: number,
    name: string,
    baseFair: string,
    waitingFair: string,
    fairPerKm: string,
    image: string,
    maxPeople: number
  ) {
    this.id = id;
    this.name = name;
    this.baseFair = baseFair;
    this.waitingFair = waitingFair;
    this.fairPerKm = fairPerKm;
    this.image = image;
    this.maxPeople = maxPeople;
  }
}
