import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Booking } from './booking.model';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private baseUrl = 'http://localhost:8080/booking-by-id';

  constructor(private http: HttpClient) {}

  getData(id: number): Observable<Booking> {
    return this.http.get<Booking>(this.baseUrl + '/' + id);
  }
}
