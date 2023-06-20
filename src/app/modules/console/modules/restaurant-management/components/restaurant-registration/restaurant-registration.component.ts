import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-restaurant-registration',
  templateUrl: './restaurant-registration.component.html',
  styleUrls: ['./restaurant-registration.component.scss']
})
export class RestaurantRegistrationComponent implements OnInit {

  private userName: string = '';
  private userEmail: string = '';
  private currentRouterComponent : any;
  constructor(private http: HttpClient) {
    this.http.get('http://localhost:8080/api/users/user').subscribe(
      (data:any) => {
        this.userName = data.fname.toString() +" "+data.lname.toString();
        console.log(this.userName)
        this.userEmail = data.email.toString();
        this.currentRouterComponent.userName = this.userName;
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
