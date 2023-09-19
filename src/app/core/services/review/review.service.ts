import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Review } from '@core/models';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getReviewsByUserId(userId: string): Observable<Review[]> {
    const url = `${this.apiUrl}/api/reviews/user/${userId}`;
    return this.http.get<Review[]>(url).pipe(
      catchError((error: any) => {
        console.error('Error:', error);
        return throwError(error);
      }),
    );
  }

  getReviewCountByHotelId(hotelId: string): Observable<number> {
    const url = `${this.apiUrl}/api/reviews/hotel/${hotelId}/review-count`;
    return this.http.get<number>(url).pipe(
      catchError((error: any) => {
        console.error('Error:', error);
        return throwError(error);
      }),
    );
  }

  getAverageRatingByHotelId(hotelId: string): Observable<string> {
    const url = `${this.apiUrl}/api/reviews/hotel/${hotelId}/average-rating`;
    return this.http.get<string>(url).pipe(
      catchError((error: any) => {
        console.error('Error:', error);
        return throwError(error);
      }),
    );
  }
}
