import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {BehaviorSubject, Observable} from "rxjs";
import {LocalStorage} from "ngx-webstorage";
import {SETTINGS} from "../../../../share/settings/commons.settings";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  @LocalStorage(SETTINGS.STORAGE.SELECTED_HOTEL_ID)
  selectedHotelID: any;

  selectedHotel: any = {};
  onSelectedHotelChange: BehaviorSubject<any> = new BehaviorSubject({});

  constructor(private httpClient: HttpClient) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {

    return new Promise<void>((resolve, reject) => {

      Promise.all([
        this.getHotelByID()
      ]).then(
        () => {
          resolve();
        },
        reject
      );
    });
  }

  getHotelByID(): Promise<any> {
    return new Promise((resolve, reject) => {

      if (this.selectedHotelID == null) {
        this.selectedHotel = {};
        this.onSelectedHotelChange.next(this.selectedHotel);
        resolve({});
      } else {
        const data = Object.assign({}, SETTINGS.ENDPOINTS.findHotelByID);
        data.url = data.url + '/' + this.selectedHotelID;

        let response = this.httpClient.get(data.url);

        response.subscribe((data: any) => {
          console.log(data);
          this.onSelectedHotelChange.next(data);
          resolve(response);
        }, reject);
      }
    });
  }
}
