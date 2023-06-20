import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent implements OnInit {
  private userEmail: string = '';
  constructor(private http: HttpClient) {
    this.http.get('http://localhost:8080/api/users/user').subscribe(
      (data:any) => {
        this.userEmail = data.email.toString();
      },
      (error) => {
        console.log(error);
      });
  }

  ngOnInit(): void {
  }

}
