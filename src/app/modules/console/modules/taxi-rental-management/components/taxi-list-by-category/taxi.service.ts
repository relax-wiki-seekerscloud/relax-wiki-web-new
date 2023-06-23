// data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Taxi } from './taxi.model';

@Injectable({
  providedIn: 'root',
})
export class TaxiService {
  private baseUrl = 'http://localhost:8080/taxi-by-category';
  private baseUrl2 = 'http://localhost:8080/taxi-by-id';

  constructor(private http: HttpClient) {}

  getAllData(id: number): Observable<Taxi[]> {
    return this.http.get<Taxi[]>(this.baseUrl + '/' + id);
  }
  getData(id: number): Observable<Taxi> {
    return this.http.get<Taxi>(this.baseUrl2 + '/' + id);
  }
}
