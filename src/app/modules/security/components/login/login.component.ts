import { Component } from '@angular/core';

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

  ngOnInit(): void {
  }
}
