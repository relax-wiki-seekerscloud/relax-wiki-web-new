import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {SETTINGS} from "../../../../share/settings/commons.settings";

@Injectable({
  providedIn: 'root'
})
export class HotelSearchService {

  onSearchHotels = new Subject();

  constructor(private httpClient: HttpClient) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {

    return new Promise<void>((resolve, reject) => {

      Promise.all([
        this.searchHotels({})
      ]).then(
        () => {
          resolve();
        },
        reject
      );
    });
  }

  searchHotels(searchRQ: any) {
    let response = this.httpClient.post(SETTINGS.ENDPOINTS.searchHotels.url, searchRQ);
    response.subscribe((data: any) => {
      console.log(data);
      this.onSearchHotels.next(data);
    });
  }
}
