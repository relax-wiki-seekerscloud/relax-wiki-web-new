import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  email = '';
  constructor(private http:HttpClient) {
  }

  ngOnInit(): void {
  }

  sendEmail() {
    console.log("Send email to: "+this.email);
    this.http.post(`http://localhost:8080/api/sendEmail/${this.email}`,{})
      .subscribe();

    this.http.post(`http://localhost:8080/api/saveSubscriber/${this.email}`,{})
      .subscribe();

    this.email='';
  }
}
