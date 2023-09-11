import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { of, throwError } from 'rxjs';
import { setUser } from '@core/states/user.state';
import { AuthService } from '@core/services/auth/auth.service';
import { LoginPageComponent } from './login-page.component';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;
  let authService: jasmine.SpyObj<AuthService>;
  let router: jasmine.SpyObj<Router>;
  let store: jasmine.SpyObj<Store>;

  beforeEach(() => {
    authService = jasmine.createSpyObj('AuthService', [
      'login',
      'getUserDetails',
    ]);
    router = jasmine.createSpyObj('Router', ['navigate']);
    store = jasmine.createSpyObj('Store', ['dispatch']);

    TestBed.configureTestingModule({
      declarations: [LoginPageComponent],
      imports: [ReactiveFormsModule],
      providers: [
        { provide: AuthService, useValue: authService },
        { provide: Router, useValue: router },
        { provide: Store, useValue: store },
      ],
    });

    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should submit the form successfully', () => {
    const userLoginDto = {
      email: 'test@example.com',
      password: 'Password123!',
    };
    const response = { token: 'token-value' };
    const userDetails = {
      id: 'user-id',
      email: 'alice@example.com',
      firstName: 'Alice',
      lastName: 'Jah',
      imageProfile: 'profile-image-url',
      username: 'johndoe',
    };

    authService.login.and.returnValue(of(response));
    authService.getUserDetails.and.returnValue(of(userDetails));

    component.loginForm.setValue(userLoginDto);
    component.onSubmit();

    expect(authService.login).toHaveBeenCalledWith(userLoginDto);
    expect(localStorage.getItem('token')).toBe(response.token);
    expect(authService.getUserDetails).toHaveBeenCalledWith('user-id');
    expect(store.dispatch).toHaveBeenCalledWith(setUser(userDetails));
    expect(router.navigate).toHaveBeenCalledWith(['/']);
  });

  it('should handle login error', () => {
    const userLoginDto = { email: 'test@example.com', password: 'Password123' };
    const error = { message: 'Login error' };

    authService.login.and.returnValue(throwError(error));

    component.loginForm.setValue(userLoginDto);
    component.onSubmit();

    expect(authService.login).toHaveBeenCalledWith(userLoginDto);
    expect(localStorage.getItem('token')).toBeNull();
    expect(authService.getUserDetails).not.toHaveBeenCalled();
    expect(store.dispatch).not.toHaveBeenCalled();
    expect(router.navigate).not.toHaveBeenCalled();
    expect(component.loginError).toBeTrue();
  });
});
