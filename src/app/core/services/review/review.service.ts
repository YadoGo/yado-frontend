import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, catchError, map, throwError, of } from 'rxjs';
import { Review, ReviewCreate, ReviewUpdate } from '@core/models';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
  }

  getReviewCountByHotelId(hotelId: string): Observable<number> {
    const url = `${this.apiUrl}/api/reviews/hotel/${hotelId}/review-count`;
    return this.http.get<number>(url).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error:', error);
        return throwError(error);
      }),
    );
  }

  getAverageRatingByHotelId(hotelId: string): Observable<number> {
    const url = `${this.apiUrl}/api/reviews/hotel/${hotelId}/average-rating`;

    return this.http.get<string>(url, { responseType: 'text' as 'json' }).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error:', error);
        return throwError('Error');
      }),
      map((rating: string) => {
        const ratingNumber = parseFloat(rating.replace(',', '.'));

        if (ratingNumber === Math.floor(ratingNumber)) {
          return ratingNumber;
        } else {
          return Math.round(ratingNumber * 10) / 10;
        }
      }),
    );
  }

  getAllReviewsByHotelId(hotelId: string): Observable<Review[]> {
    const url = `${this.apiUrl}/api/reviews/hotel/${hotelId}`;

    return this.http.get<Review[]>(url).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error:', error);
        return throwError(error);
      }),
    );
  }

  getReviewById(reviewId: string): Observable<ReviewUpdate> {
    const url = `${this.apiUrl}/api/reviews/${reviewId}`;
    const headers = this.getHeaders();

    return this.http.get<ReviewUpdate>(url, { headers }).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error:', error);
        return throwError(error);
      }),
    );
  }

  createReview(reviewCreate: ReviewCreate): Observable<any> {
    const url = `${this.apiUrl}/api/reviews`;
    const headers = this.getHeaders();

    return this.http.post(url, reviewCreate, { headers }).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error create review:', error);
        return throwError(error);
      }),
    );
  }

  updateReview(
    reviewId: string,
    reviewUpdate: ReviewUpdate,
  ): Observable<boolean> {
    const url = `${this.apiUrl}/api/reviews/${reviewId}`;
    const headers = this.getHeaders();

    return this.http.put<boolean>(url, reviewUpdate, { headers }).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      }),
    );
  }

  deleteReviewById(reviewId: string, userId: string): Observable<boolean> {
    const url = `${this.apiUrl}/api/reviews/${reviewId}/${userId}`;
    const headers = this.getHeaders();

    return this.http.delete<boolean>(url, { headers }).pipe(
      catchError((error) => {
        console.error('Error deleting review:', error);
        return of(false);
      }),
    );
  }
}
