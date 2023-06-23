// data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TaxiCategory } from './taxi-category.model';

@Injectable({
  providedIn: 'root',
})
export class TaxiCategoryService {
  private baseUrl = 'http://localhost:8080/taxi-category';

  constructor(private http: HttpClient) {}

  getAllData(): Observable<TaxiCategory[]> {
    return this.http.get<TaxiCategory[]>(this.baseUrl);
  }

  getData(id: number): Observable<TaxiCategory> {
    return this.http.get<TaxiCategory>(this.baseUrl + '/' + id);
  }
}
