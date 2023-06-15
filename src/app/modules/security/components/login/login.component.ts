import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

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

  constructor() { }

  userLoginForm=new FormGroup({
    userEmail:new FormControl('',[Validators.required,Validators.email]),
    userPassword:new FormControl('',[Validators.required])
  })

  get userEmail(){
    return this.userLoginForm.get('userEmail');
  }
  ngOnInit(): void {
  }
}
