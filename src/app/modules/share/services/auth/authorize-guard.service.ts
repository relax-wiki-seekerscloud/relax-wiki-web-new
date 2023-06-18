import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { JwtTokenService } from './jwt-token.service';
import { LocalStorageService } from './local-storage.service';
import { UserLoginService } from '../user/user-login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizeGuardService implements CanActivate {

  constructor(private userLoginService: UserLoginService,
              private authStorageService: LocalStorageService,
              private jwtService: JwtTokenService, private router:Router) {
  }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = this.authStorageService.get('auth');
    if(!token){
      this.router.navigate(['/security/log-in']).then();
      return false;
    }
    this.jwtService.setToken(token);
    if (this.jwtService.getEmailId()) {
      if (this.jwtService.isTokenExpired()) {
        this.router.navigate(['/security/log-in']).then();
        return false;
      } else {
        return true;
      }
    } else {
      this.router.navigate(['/security/log-in']).then();
      return false;
    }
  }
}
