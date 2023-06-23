import {Injectable} from '@angular/core';
import {LocalStorage} from "ngx-webstorage";
import {SETTINGS} from "../../../../share/settings/commons.settings";
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class EntertainmentService {

  @LocalStorage(SETTINGS.STORAGE.SELECTED_ENTERTAINMENT_ID)
  selectedEntertainmentID: any;

  selectedEntertainment: any = {};
  onSelectedEntertainmentChange: BehaviorSubject<any> = new BehaviorSubject({});

  constructor(private httpClient: HttpClient) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {

    return new Promise<void>((resolve, reject) => {

      Promise.all([
        this.getEntertainmentByID()
      ]).then(
        () => {
          resolve();
        },
        reject
      );
    });
  }

  getEntertainmentByID(): Promise<any> {
    return new Promise((resolve, reject) => {

      if (this.selectedEntertainment == null) {
        this.selectedEntertainment = {};
        this.onSelectedEntertainmentChange.next(this.selectedEntertainment);
        resolve({});
      } else {
        const data = Object.assign({}, SETTINGS.ENDPOINTS.findEntertainmentByID);
        data.url = data.url + '/' + this.selectedEntertainmentID;

        let response = this.httpClient.get(data.url);

        response.subscribe((data: any) => {
          this.onSelectedEntertainmentChange.next(data);
          resolve(response);
        }, reject);
      }
    });
  }
}
