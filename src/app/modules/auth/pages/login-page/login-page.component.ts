import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@core/services/auth/auth.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { setUser } from '@core/states/user.state';
import jwt_decode from 'jwt-decode';
import { DecodedJwtToken } from '@core/models/user/decoded-jwt-token/decoded-jwt-token.model';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  loginForm: FormGroup;
  loginError = false;
  formSubmitted = false;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private store: Store,
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit() {
    this.formSubmitted = true;
    if (this.loginForm.valid) {
      const userLoginDto = this.loginForm.value;
      this.authService.login(userLoginDto).subscribe(
        (response) => {
          localStorage.setItem('token', response.token);

          const decodedToken: DecodedJwtToken = jwt_decode(response.token);
          const userId: string = decodedToken.Id;

          this.authService.getUserDetails(userId).subscribe((userDetails) => {
            this.store.dispatch(setUser(userDetails));

            this.router.navigate(['/']);
          });
        },
        (error) => {
          console.error('Error: ', error);
          this.loginError = true;
        },
      );
    }
  }
}
