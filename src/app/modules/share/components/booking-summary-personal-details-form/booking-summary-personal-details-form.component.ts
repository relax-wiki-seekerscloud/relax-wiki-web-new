import { Component, OnInit } from '@angular/core';
import { HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-booking-summary-personal-details-form',
  templateUrl: './booking-summary-personal-details-form.component.html',
  styleUrls: ['./booking-summary-personal-details-form.component.scss']
})
export class BookingSummaryPersonalDetailsFormComponent implements OnInit {

  firstName: string="";
  lastName: string="";
  email:string="";
  specialRequests:string="";
  arrivalTime: string="";

  constructor(private http:HttpClient) { }

  save(){
    let bodyData = {
      "firstName":this.firstName,
      "lastName":this.lastName,
      "email":this.email,
      "specialRequests":this.specialRequests,
      "arrivalTime":this.arrivalTime
    };

    this.http.post("http://localhost:8080/api/bookingPersonalDetail/addBookingPersonalDetails",bodyData).subscribe((resultData:any)=>
    {
      console.log(resultData);
      alert("Personal details entered successfully for booking")

      this.firstName='';
      this.lastName='';
      this.email='';
      this.specialRequests='';
      this.arrivalTime='';
    });
  }

  ngOnInit(): void {
  }

}
