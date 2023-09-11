import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HotelService {
  constructor(private http: HttpClient) {}

  getHotels(): Observable<any> {
    return this.http.get('assets/data/hotels.json');
  }
}
