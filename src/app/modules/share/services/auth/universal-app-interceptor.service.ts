import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import {LocalStorageService} from "./local-storage.service";

@Injectable({
  providedIn: 'root'
})
export class UniversalAppInterceptorService implements HttpInterceptor{

  private localStorageService: LocalStorageService;

  constructor(localStorageService:LocalStorageService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = this.localStorageService.get('auth')
    req = req.clone({
      url:  req.url,
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next.handle(req);
  }
}
