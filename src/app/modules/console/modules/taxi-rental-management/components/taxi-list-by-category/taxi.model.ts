export class Taxi {
  id: number;
  color: string;
  contact: string;
  image: string;
  vehicleNo: string;
  category: number;
  ownerName: string;

  constructor(
    id: number,
    color: string,
    contact: string,
    image: string,
    vehicleNo: string,
    category: number,
    ownerName: string
  ) {
    this.id = id;
    this.color = color;
    this.contact = contact;
    this.image = image;
    this.vehicleNo = vehicleNo;
    this.category = category;
    this.ownerName = ownerName;
  }
}
