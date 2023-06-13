import {Injectable} from '@angular/core';
import {LocalStorage} from "ngx-webstorage";
import {SETTINGS} from "../../../../share/settings/commons.settings";
import {HttpClient} from "@angular/common/http";
import {ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RestaurantSearchService {

  @LocalStorage(SETTINGS.STORAGE.RESTAURANT_SEARCH_DATA)
  restaurantSearchData: any;

  onSearchRestaurants = new Subject();

  constructor(private httpClient: HttpClient) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {

    return new Promise<void>((resolve, reject) => {

      Promise.all([
        this.searchRestaurants({})
      ]).then(
        () => {
          resolve();
        },
        reject
      );
    });
  }

  searchRestaurants(searchRQ: any) {
    searchRQ =  this.restaurantSearchData;
    let response = this.httpClient.post(SETTINGS.ENDPOINTS.searchRestaurants.url, searchRQ);
    response.subscribe((data: any) => {
      this.onSearchRestaurants.next(data);
    });
  }
}
