import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss']
})
export class VerifyEmailComponent implements OnInit {
  token:string;
  error = false;
  constructor(private route: ActivatedRoute,private http: HttpClient,private router:Router) {

  }




  ngOnInit(): void {
    this.route.params.subscribe( params => {
      this.token = params['token'];
      const result = this.http.get('http://localhost:8080/api/auth/verify/'+this.token);
      result.subscribe((res)=>{
        this.router.navigate(['/security/email-verified']).then();
      },(error:any)=>{
        this.error = true;
        return;

      })
    } );
  }
  go(){
    this.router.navigate(['/security/log-in']).then();
  }

}
