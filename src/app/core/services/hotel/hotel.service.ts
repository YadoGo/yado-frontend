import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Hotel } from '@core/models';

@Injectable({
  providedIn: 'root',
})
export class HotelService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getHotelsByPopulationId(
    populationId: number,
    page: number,
    pageSize: number,
  ): Observable<any> {
    const url = `${this.apiUrl}/api/hotels/population/${populationId}?page=${page}&pageSize=${pageSize}`;
    return this.http.get(url);
  }

  getHotels(): Observable<any> {
    return this.http.get('assets/data/hotels.json');
  }

  getHotelById(hotelId: string): Observable<Hotel> {
    const url = `${this.apiUrl}/api/hotels/${hotelId}`;
    return this.http.get<Hotel>(url);
  }

  getPopulationByName(name: string): Observable<any> {
    const url = `${this.apiUrl}/api/populations/population-name/${name}`;
    return this.http.get(url);
  }

  getFilteredHotels(
    parameters: any,
    populationId: number,
    page: number,
    pageSize: number,
  ): Observable<any> {
    let params = new HttpParams()
      .set('populationId', populationId.toString())
      .set('page', page.toString())
      .set('pageSize', pageSize.toString());

    for (const key in parameters) {
      if (Object.prototype.hasOwnProperty.call(parameters, key)) {
        params = params.set(key, parameters[key]);
      }
    }

    return this.http.get(`${this.apiUrl}/api/hotels/filter`, { params });
  }
}
