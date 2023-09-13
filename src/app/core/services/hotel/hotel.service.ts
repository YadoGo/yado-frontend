import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HotelService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getHotelsByCountry(
    countryId: number,
    page: number,
    pageSize: number,
  ): Observable<any> {
    const url = `${this.apiUrl}/api/hotels/population/${countryId}?page=${page}&pageSize=${pageSize}`;
    return this.http.get(url);
  }

  getHotels(): Observable<any> {
    return this.http.get('assets/data/hotels.json');
  }
}
