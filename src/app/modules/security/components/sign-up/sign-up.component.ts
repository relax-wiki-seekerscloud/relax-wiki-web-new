import {Component, Inject, OnInit} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from "@angular/forms";
import {Router} from "@angular/router";
import {UserRegistrationService} from "../../../share/services/user/user-registration-service.service";
import {UserRegistrationDto} from "../../../share/dto/classes/user/UserRegistrationDTO";
import {user} from "@angular/fire/auth";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm : FormGroup = new FormGroup<any>({
    userFirstName:new FormControl('',[Validators.required,Validators.minLength(3)]),
    userLastName:new FormControl('',[Validators.required,Validators.minLength(3)]),
    userEmail:new FormControl('',[Validators.required,Validators.email]),
    userPassword:new FormControl('',[Validators.required,Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]),
    confirmPassword:new FormControl('',[Validators.required, (control: AbstractControl): ValidationErrors | null => {
      const password = this.signUpForm?.controls['userPassword'].value;
      return password != control.value ? {passwordNotMatch:true} : null;
    }]),

  });

  constructor(private fb: FormBuilder,
              @Inject(UserRegistrationService)private userRegistrationService: UserRegistrationService,
              private router: Router) {
  }

  get hidePassword(): boolean {
    return <boolean>this._hidePassword;
  }

  set hidePassword(value: boolean) {
    this._hidePassword = value;
  }

  private _hidePassword: boolean | undefined=true;


  get hideCPassword(): boolean {
    return <boolean>this._hideCPassword;
  }

  set hideCPassword(value: boolean) {
    this._hideCPassword = value;
  }

  private _hideCPassword: boolean | undefined=true;


  msg: string | undefined;

  // validatePassword() {
  //   console.log(this.signUpForm);
  //   const password = this.signUpForm?.get('userPassword')?.value!;
  //   const confirmPassword = this.signUpForm?.get('confirmPassword')?.value!;
  //   if (password == confirmPassword){
  //     return false;
  //   }
  //   return true;
  // }

  addUser(){
    let valid = true;
    for (const i in this.signUpForm.controls) {
        this.signUpForm.controls[i].markAsTouched();
        valid = valid && this.signUpForm.controls[i].status =="VALID";

    }
    if(!valid){
      return;
    }
    const userRegistrationDto = new UserRegistrationDto();
    userRegistrationDto.firstName = this.signUpForm.value.userFirstName;
    userRegistrationDto.lastName = this.signUpForm.value.userLastName;
    userRegistrationDto.email = this.signUpForm.value.userEmail;
    userRegistrationDto.password = this.signUpForm.value.userPassword;

    this.userRegistrationService.postUserRegistration(userRegistrationDto)
      .subscribe(
        (res : any) => {
          console.log(res);
          this.router.navigate(['/security/please-verify-email/'+userRegistrationDto.email]).then();
        },
        (error :any) => {
          this.msg = error.error.message;
          console.log(this.msg);
          if (this.msg === 'Email Exists') {
            this.signUpForm.get('userEmail')?.setErrors({ emailExists: true });
          }
        }
      );
  }



  ngOnInit(): void {
  }

}
