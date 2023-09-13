import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserDetails } from '@core/models/user/user-details/user-details.model';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = environment.apiBaseUrl;

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
        console.error('Error en la solicitud PUT:', error);
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
        console.error('Error en la solicitud DELETE:', error);
        throw error;
      }),
    );
  }
}
