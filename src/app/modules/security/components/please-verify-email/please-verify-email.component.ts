import {Component, Inject, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {UserLoginService} from "../../../share/services/user/user-login.service";
import {ResendVerificationEmailService} from "../../../share/services/auth/resend-verification-email.service";

@Component({
  selector: 'app-please-verify-email',
  templateUrl: './please-verify-email.component.html',
  styleUrls: ['./please-verify-email.component.scss']
})
export class PleaseVerifyEmailComponent implements OnInit {
  // @Input() userEmail:string;
  error = false;
  sent = '';
  constructor(private http: HttpClient,private router:Router, private route: ActivatedRoute, @Inject(ResendVerificationEmailService)private resendVerificationEmailService: ResendVerificationEmailService ) {

  }

  ngOnInit(): void {

  }
  goTo(){
    this.router.navigate(['security/log-in']).then();
  }

  resend(){
    this.route.params.subscribe( params => {
      const email = params['email'];
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
