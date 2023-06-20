import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-hotel-registration',
  templateUrl: './hotel-registration.component.html',
  styleUrls: ['./hotel-registration.component.scss']
})
export class HotelRegistrationComponent implements OnInit {
  private userName: string = '';
  private userEmail: string = '';
  private userFirstName: string = '';
  private currentRouterComponent : any;
  constructor(private http: HttpClient) {
    this.http.get('http://localhost:8080/api/users/user').subscribe(
      (data:any) => {
        this.userName = data.fname.toString() +" "+data.lname.toString();
        this.userFirstName = data.fname.toString();
        console.log(this.userName)
        this.userEmail = data.email.toString();
        this.currentRouterComponent.userName = this.userName;
        this.currentRouterComponent.userFirstName = this.userFirstName;
      },
      (error) => {
        console.log(error);
      });
  }

  ngOnInit(): void {
  }
  onOutletLoaded(component:any){
    this.currentRouterComponent = component;
  }
}
