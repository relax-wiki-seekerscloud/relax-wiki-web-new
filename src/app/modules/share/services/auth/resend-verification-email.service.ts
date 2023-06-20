import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ResendVerificationEmailService {

  constructor(private http: HttpClient) { }

  resend(email:string){
    return this.http.get('http://localhost:8080/api/auth/get-new-verification/'+email);
  }
}
