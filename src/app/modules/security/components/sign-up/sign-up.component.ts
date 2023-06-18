import {Component, Inject, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
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
    userPassword: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword:['', [Validators.required, Validators.minLength(8)]],
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
    if (this.signUpForm.invalid) {
      console.log('Invlid');
      // return;
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

  validatePasswordRequirements(control: AbstractControl) {
    const value = control.value as string;

    if (!/(?=.*[a-z])/.test(value)) {
      return { lowercase: true };
    }
    if (!/(?=.*[A-Z])/.test(value)) {
      return { uppercase: true };
    }
    if (!/(?=.*\d)/.test(value)) {
      return { digit: true };
    }
    if (!/(?=.*[@$!%*?&])/.test(value)) {
      return { specialCharacter: true };
    }

    return null;
  }
  ngOnInit(): void {
  }

}
