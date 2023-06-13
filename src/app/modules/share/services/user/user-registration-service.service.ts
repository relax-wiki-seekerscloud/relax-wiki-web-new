import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {UserRegistrationDto} from "../../dto/classes/user/UserRegistrationDTO";

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {
  constructor(private http: HttpClient) { }

  postUserRegistration(userRegistrationDto: UserRegistrationDto): Observable<any> {
    return this.http.post('http://localhost:8080/api/v1/user/sign-up', userRegistrationDto);
  }

}
