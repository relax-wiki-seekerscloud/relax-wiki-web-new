import {Inject, Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse, HttpErrorResponse
} from '@angular/common/http';
import {catchError, filter, map, Observable, throwError} from 'rxjs';
import {LocalStorageService} from "./modules/share/services/auth/local-storage.service";
import {Router} from "@angular/router";

@Injectable()
export class UniversalAppInterceptor implements HttpInterceptor {


  constructor(@Inject(LocalStorageService) private localStorageService:LocalStorageService, private router:Router) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(req.url === 'http://localhost:8080/api/auth/login' || req.url === 'http://localhost:8080/api/auth/signup'){
      console.log('hi');
      return next.handle(req);
    }
    const token = this.localStorageService.get('auth');
    req = req.clone({
      url:  req.url,
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });

    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMsg = '';
        if (!(error.error instanceof ErrorEvent)) {
          if (error.status === 401 || error.status === 403) {
            this.localStorageService.remove('auth');
            this.router.navigate(['/security/log-in']).then();
          }
        }
        return throwError(() => error);
      })
    );
  }
}
