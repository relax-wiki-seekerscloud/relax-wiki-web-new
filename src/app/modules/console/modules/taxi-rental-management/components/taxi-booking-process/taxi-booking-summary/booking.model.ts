export class Booking {
  id: number;
  destination: string;
  date: string;
  pickupLocation: string;
  pickupTime: string;
  peopleCount: string;
  firstName: string;
  lastName: string;
  distance: string;
  price: string;
  email: string;
  request: string;
  vehicleId: string;

  constructor(
    id: number,
    destination: string,
    date: string,
    pickupLocation: string,
    pickupTime: string,
    peopleCount: string,
    firstName: string,
    lastName: string,
    distance: string,
    price: string,
    email: string,
    request: string,
    vehicleId: string
  ) {
    this.id = id;
    this.destination = destination;
    this.date = date;
    this.pickupLocation = pickupLocation;
    this.pickupTime = pickupTime;
    this.peopleCount = peopleCount;
    this.firstName = firstName;
    this.lastName = lastName;
    this.distance = distance;
    this.price = price;
    this.email = email;
    this.request = request;
    this.vehicleId = vehicleId;
  }
}
