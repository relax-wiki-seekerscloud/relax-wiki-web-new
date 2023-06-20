import {Component, Inject, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {ResendVerificationEmailService} from "../../../share/services/auth/resend-verification-email.service";

@Component({
  selector: 'app-email-not-verified',
  templateUrl: './email-not-verified.component.html',
  styleUrls: ['./email-not-verified.component.scss']
})
export class EmailNotVerifiedComponent implements OnInit {
  error = false;
  sent:String;
  constructor(private http: HttpClient,private router:Router, private route: ActivatedRoute, @Inject(ResendVerificationEmailService)private resendVerificationEmailService: ResendVerificationEmailService ) {

  }


  ngOnInit(): void {
  }

  resend(){
    this.route.params.subscribe( params => {
      const email = params['email'];
      console.log(email);
      const result = this.resendVerificationEmailService.resend(email);
      result.subscribe((res) => {
        this.sent = "Verification email sent"
        return true;
      }, (error: any) => {
        console.log(error);
        this.error = true;
        return;
      })
    });
  }
  }


