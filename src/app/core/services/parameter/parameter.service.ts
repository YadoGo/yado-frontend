import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ParameterDto } from '@core/models';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ParameterService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getParametersByHotelId(hotelId: string): Observable<ParameterDto> {
    const url = `${this.apiUrl}/api/parameters/${hotelId}`;
    return this.http.get<ParameterDto>(url);
  }
}
