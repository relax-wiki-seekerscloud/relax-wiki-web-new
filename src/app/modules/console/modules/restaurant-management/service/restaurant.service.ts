import {Injectable} from '@angular/core';
import {LocalStorage} from "ngx-webstorage";
import {SETTINGS} from "../../../../share/settings/commons.settings";
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  @LocalStorage(SETTINGS.STORAGE.SELECTED_RESTAURANT_ID)
  selectedRestaurantID: any;

  selectedRestaurant: any = {};
  onSelectedRestaurantChange: BehaviorSubject<any> = new BehaviorSubject({});

  constructor(private httpClient: HttpClient) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {

    return new Promise<void>((resolve, reject) => {

      Promise.all([
        this.getRestaurantByID()
      ]).then(
        () => {
          resolve();
        },
        reject
      );
    });
  }

  getRestaurantByID(): Promise<any> {
    return new Promise((resolve, reject) => {

      if (this.selectedRestaurantID == null) {
        this.selectedRestaurant = {};
        this.onSelectedRestaurantChange.next(this.selectedRestaurant);
        resolve({});
      } else {
        const data = Object.assign({}, SETTINGS.ENDPOINTS.findRestaurantByID);
        data.url = data.url + '/' + this.selectedRestaurantID;

        let response = this.httpClient.get(data.url);

        response.subscribe((data: any) => {
          this.onSelectedRestaurantChange.next(data);
          resolve(response);
        }, reject);
      }
    });
  }
}
