import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ApiResponse, Favorite, FavoriteExistsResponse } from '@core/models';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  private createHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');

    if (!token) {
      throw new Error('Authentication token not found.');
    }

    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('Error:', error);
    return throwError(error);
  }

  addToFavorites(favoriteRequest: Favorite): Observable<ApiResponse> {
    const headers = this.createHeaders();

    return this.http
      .post<ApiResponse>(`${this.apiUrl}/api/favorites/add`, favoriteRequest, {
        headers,
      })
      .pipe(catchError(this.handleError));
  }

  removeFavorites(favoriteRequest: Favorite): Observable<ApiResponse> {
    const headers = this.createHeaders();

    return this.http
      .delete<ApiResponse>(`${this.apiUrl}/api/favorites/remove`, {
        headers,
        body: favoriteRequest,
      })
      .pipe(catchError(this.handleError));
  }

  checkIfFavoriteExists(
    userId: string,
    hotelId: string,
  ): Observable<FavoriteExistsResponse> {
    const headers = this.createHeaders();

    return this.http
      .get<FavoriteExistsResponse>(
        `${this.apiUrl}/api/favorites/exists?userId=${userId}&hotelId=${hotelId}`,
        { headers },
      )
      .pipe(catchError(this.handleError));
  }

  getFavoriteHotelsByUserId(userId: string): Observable<Favorite[]> {
    const url = `${this.apiUrl}/api/favorites/user/${userId}`;
    return this.http.get<Favorite[]>(url).pipe(
      catchError((error: any) => {
        console.error('Error:', error);
        return throwError(error);
      }),
    );
  }
}
