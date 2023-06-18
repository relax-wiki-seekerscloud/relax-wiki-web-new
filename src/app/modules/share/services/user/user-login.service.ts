import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserLoginDto} from "../../dto/classes/user/UserLoginDTO";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  constructor(private http: HttpClient) { }

  postUserLogin(userLoginDto: UserLoginDto): Observable<any> {
    return this.http.post('http://localhost:8080/api/auth/login', userLoginDto);
  }
}
