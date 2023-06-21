export class GPUser {

  userId:String;
  email:String;
  firstName:String;
  lastName:String;
  phoneNumber:String;

  constructor(userId: String, email: String, firstName: String, lastName: String, phoneNumber: String) {
    this.userId = userId;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
  }
}
