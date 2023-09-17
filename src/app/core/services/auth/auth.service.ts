import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Store } from '@ngrx/store';
import { setUser } from '@core/states/user.state';
import { UserLogin } from '@core/models/user/user-login/user-login.model';
import { DecodedJwtToken } from '@core/models/user/decoded-jwt-token/decoded-jwt-token.model';
import jwt_decode from 'jwt-decode';
import { flatMap, catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = environment.apiBaseUrl;

  constructor(
    private http: HttpClient,
    private store: Store,
    private router: Router,
  ) {}

  login(userLoginDto: UserLogin): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/users/login`, userLoginDto);
  }

  register(userRegisterDto: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/users/register`, userRegisterDto);
  }

  registerAndLogin(userRegisterDto: any): Observable<void> {
    return this.register(userRegisterDto).pipe(
      flatMap(() =>
        this.login({
          email: userRegisterDto.email,
          password: userRegisterDto.password,
        }),
      ),
      tap((response) => {
        localStorage.setItem('token', response.token);

        const decodedToken: DecodedJwtToken = jwt_decode(response.token);
        const userId: string = decodedToken.Id;

        this.getUserDetails(userId).subscribe(
          (userDetails) => {
            this.store.dispatch(setUser(userDetails));
            this.router.navigate(['/']);
          },
          (error) => {
            console.error('Error fetching user details: ', error);
          },
        );
      }),
      catchError((error) => {
        console.error('Error during registration and login: ', error);
        throw error;
      }),
    );
  }

  getUserDetails(userId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/users/${userId}`);
  }

  initializeUserFromToken() {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken: DecodedJwtToken = jwt_decode(token);
      const userId: string = decodedToken.Id;

      this.getUserDetails(userId).subscribe(
        (userDetails) => {
          this.store.dispatch(setUser(userDetails));
        },
        (error) => {
          console.error('Error: ', error);
        },
      );
    }
  }
}
