import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserRegistrationService} from "../../../share/services/user/user-registration-service.service";
import {UserRegistrationDto} from "../../../share/dto/classes/user/UserRegistrationDTO";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm : FormGroup = this.fb.group({
    userFirstName:['', [Validators.required, Validators.minLength(3)]],
    userLastName: ['', [Validators.required, Validators.minLength(3)]],
    userEmail: ['', [Validators.required, Validators.email]],
    userPassword: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword:['', [Validators.required, Validators.minLength(6)]],
  },
    {
      validator: this.validatePassword.bind(this),
    }
    );

  constructor(private fb: FormBuilder,
              @Inject(UserRegistrationService)private userRegistrationService: UserRegistrationService,
              private router: Router) {
    this.signUpForm.valueChanges.subscribe(console.log)
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

  addUser(){
    const userRegistrationDto = new UserRegistrationDto();
    userRegistrationDto.userFirstName = this.signUpForm.value.userFirstName;
    userRegistrationDto.userLastName = this.signUpForm.value.userLastName;
    userRegistrationDto.userEmail = this.signUpForm.value.userEmail;
    userRegistrationDto.userPassword = this.signUpForm.value.userPassword;

    this.userRegistrationService.postUserRegistration(userRegistrationDto)
      .subscribe(
        (res : any) => {
          console.log(res);
          this.router.navigate(['/log-in']).then();
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

  validatePassword() {
    const password = this.signUpForm?.get('userPassword')?.value!;
    const confirmPassword = this.signUpForm?.get('confirmPassword')?.value!;
    console.log(password,confirmPassword);
    if (password == confirmPassword){
      return {passwordNotMatch: false};
    }
    return {passwordNotMatch: true};
  }
  ngOnInit(): void {
  }

}
