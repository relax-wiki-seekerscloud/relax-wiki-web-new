import {Injectable} from '@angular/core';
import {LocalStorage} from "ngx-webstorage";
import {SETTINGS} from "../../../../share/settings/commons.settings";
import {Observable, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class EntertainmentSearchService {

  @LocalStorage(SETTINGS.STORAGE.ENTERTAINMENT_SEARCH_DATA)
  entertainmentSearchData: any;

  onSearchEntertainments = new Subject();

  constructor(private httpClient: HttpClient) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {

    return new Promise<void>((resolve, reject) => {

      Promise.all([
        this.searchEntertainments({})
      ]).then(
        () => {
          resolve();
        },
        reject
      );
    });
  }

  searchEntertainments(searchRQ: any) {
    searchRQ = this.entertainmentSearchData;
    let response = this.httpClient.post(SETTINGS.ENDPOINTS.searchEntertainments.url, searchRQ);
    response.subscribe((data: any) => {
      this.onSearchEntertainments.next(data);
    });
  }
}
