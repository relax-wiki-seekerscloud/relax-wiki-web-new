import {Component, Inject} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserLoginDto} from "../../../share/dto/classes/user/UserLoginDTO";
import {UserLoginService} from "../../../share/services/user/user-login.service";
import {LocalStorageService} from "../../../share/services/auth/local-storage.service";


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
  password: any;
  private _hide: boolean | undefined=true;

  constructor(@Inject(UserLoginService)private userLoginService: UserLoginService , @Inject(LocalStorageService) private localStorageService:LocalStorageService) { }

  userLoginForm :FormGroup =new FormGroup<any>({
    userEmail:new FormControl('',[Validators.required,Validators.email]),
    userPassword:new FormControl('',[Validators.required])
  })

  get userEmail(){
    return this.userLoginForm.get('userEmail');
  }


  loginUser(){
    let valid = true;
    for (const i in this.userLoginForm.controls) {
      this.userLoginForm.controls[i].markAsTouched();
      valid = valid && this.userLoginForm.controls[i].status =="VALID";
    }
    if(!valid){
      return;
    }
    const userLoginDto = new UserLoginDto();
    userLoginDto.email = this.userLoginForm.value.userEmail;
    userLoginDto.password = this.userLoginForm.value.userPassword;

    this.userLoginService.postUserLogin(userLoginDto).subscribe((res:any)=>{
      this.localStorageService.set('auth',res.access_token);
    },(error:any)=>{
      console.log(error);
    })
  }
  ngOnInit(): void {
  }
}
