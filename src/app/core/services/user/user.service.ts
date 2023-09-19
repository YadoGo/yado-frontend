import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { UserDetails } from '@core/models/user/user-details/user-details.model';
import { environment } from 'src/environments/environment';
import { UserChangePassword } from '@core/models';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  updateUser(user: UserDetails): Observable<UserDetails> {
    const url = `${this.apiUrl}/api/users/${user.id}`;

    const token = localStorage.getItem('token');

    console.log(token);

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.put<UserDetails>(url, user, { headers }).pipe(
      catchError((error) => {
        console.error('Error PUT:', error);
        throw error;
      }),
    );
  }

  deleteUser(userId: string): Observable<void> {
    const url = `${this.apiUrl}/api/users/${userId}`;
    const token = localStorage.getItem('token');
    console.log('Token:', token);

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.delete<void>(url, { headers }).pipe(
      catchError((error) => {
        console.error('Error DELETE:', error);
        throw error;
      }),
    );
  }

  changePassword(
    userId: string,
    changePassword: UserChangePassword,
  ): Observable<void> {
    const url = `${this.apiUrl}/api/users/${userId}/change-password`;
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.post<void>(url, changePassword, { headers }).pipe(
      catchError((error) => {
        console.error('Error POST:', error);
        throw error;
      }),
    );
  }

  getUserDetails(userId: string): Observable<UserDetails> {
    const url = `${this.apiUrl}/api/users/${userId}`;
    return this.http.get<UserDetails>(url).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error:', error);
        return throwError(error);
      }),
    );
  }
}
