import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UserUserRoleRequest } from '@core/models';

@Injectable({
  providedIn: 'root',
})
export class UserRoleRequestService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  createUserRoleRequest(
    userRoleRequest: UserUserRoleRequest,
  ): Observable<UserUserRoleRequest> {
    const url = `${this.apiUrl}/api/user-role-requests`;
    const token = localStorage.getItem('token');

    if (token) {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`,
      });

      return this.http
        .post<UserUserRoleRequest>(url, userRoleRequest, { headers })
        .pipe(
          catchError((error) => {
            return throwError(error);
          }),
        );
    } else {
      return throwError('Error: Unauthorized');
    }
  }

  getUserRoleRequest(userId: string): Observable<UserUserRoleRequest> {
    const url = `${this.apiUrl}/api/user-role-requests/${userId}`;
    const token = localStorage.getItem('token');

    if (token) {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`,
      });

      return this.http.get<UserUserRoleRequest>(url, { headers }).pipe(
        catchError((error) => {
          return throwError(error);
        }),
      );
    } else {
      return throwError('Error: Unauthorized');
    }
  }
}
