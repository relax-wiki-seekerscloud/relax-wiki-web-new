import {Component, Inject} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserLoginDto} from "../../../share/dto/classes/user/UserLoginDTO";
import {UserLoginService} from "../../../share/services/user/user-login.service";
import {LocalStorageService} from "../../../share/services/auth/local-storage.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  get hide(): boolean {
    return <boolean>this._hide;
  }

  set hide(value: boolean) {
    this._hide = value;
  }
  error:string;
  private _hide: boolean | undefined=true;

  constructor(@Inject(UserLoginService)private userLoginService: UserLoginService , @Inject(LocalStorageService) private localStorageService:LocalStorageService, private router:Router) { }

  userLoginForm :FormGroup =new FormGroup<any>({
    userEmail:new FormControl('',[Validators.required,Validators.email]),
    userPassword:new FormControl('',[Validators.required])
  })

  get userEmail(){
    return this.userLoginForm.get('userEmail');
  }


  loginUser(){
    this.error = "";
    let valid = true;
    for (const i in this.userLoginForm.controls) {
      this.userLoginForm.controls[i].markAsTouched();
      valid = valid && this.userLoginForm.controls[i].status =="VALID";
    }
    if(!valid){
      this.error = "Please fill all the required fields";
      return;
    }
    const userLoginDto = new UserLoginDto();
    userLoginDto.email = this.userLoginForm.value.userEmail;
    userLoginDto.password = this.userLoginForm.value.userPassword;
    this.userLoginForm.reset();

    this.userLoginService.postUserLogin(userLoginDto).subscribe((res:any)=>{
      this.localStorageService.set('auth',res.access_token);
      this.router.navigate(['/console/list-property/']).then();
    },(error:any)=>{
      console.log(error);
      if(error.status==403){
        this.error = "Invalid credentials";
        return;
      }
      if(error.status==401){
        this.router.navigate(['/security/email-not-verified/'+userLoginDto.email]).then();
        return;
      }
      this.error = "Something went wrong";
    });
  }
  ngOnInit(): void {
  }
}
