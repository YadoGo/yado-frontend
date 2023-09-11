import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { AuthService } from './auth.service';
import { setUser } from '@core/states/user.state';
import { of, throwError } from 'rxjs';
import { environment } from '@environments/environment';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

describe('AuthService', () => {
  let authService: AuthService;
  let httpTestingController: HttpTestingController;
  let router: Router;
  let store: jasmine.SpyObj<Store>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AuthService,
        Router,
        {
          provide: Store,
          useValue: jasmine.createSpyObj('Store', ['dispatch']),
        },
      ],
    });

    authService = TestBed.inject(AuthService);
    httpTestingController = TestBed.inject(HttpTestingController);
    router = TestBed.inject(Router);
    store = TestBed.inject(Store) as jasmine.SpyObj<Store>;
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(authService).toBeTruthy();
  });

  it('should register and login successfully', () => {
    const userRegisterDto = {
      email: 'test@example.com',
      password: 'Qwerty123!',
    };
    const mockResponse = { token: 'mockToken' };
    const userDetails = {
      id: '1',
      email: 'test@example.com',
      firstName: 'Test',
      lastName: 'User',
      imageProfile: 'profile.jpg',
      username: 'testuser',
    };

    spyOn(authService, 'register').and.returnValue(of(mockResponse));
    spyOn(authService, 'login').and.returnValue(of(mockResponse));
    spyOn(authService, 'getUserDetails').and.returnValue(of(userDetails));
    spyOn(store, 'dispatch');
    spyOn(router, 'navigate');

    authService.registerAndLogin(userRegisterDto).subscribe(() => {
      expect(store.dispatch).toHaveBeenCalledWith(setUser(userDetails));
      expect(router.navigate).toHaveBeenCalledWith(['/']);
    });

    const registerReq = httpTestingController.expectOne(
      `${environment.apiUrl}/api/users/register`,
    );
    expect(registerReq.request.method).toBe('POST');
    expect(registerReq.request.body).toEqual(userRegisterDto);
    registerReq.flush({});

    const loginReq = httpTestingController.expectOne(
      `${environment.apiUrl}/api/users/login`,
    );
    expect(loginReq.request.method).toBe('POST');
    expect(loginReq.request.body).toEqual({
      email: userRegisterDto.email,
      password: userRegisterDto.password,
    });
    loginReq.flush(mockResponse);
  });

  it('should handle errors during register and login', () => {
    const userRegisterDto = {
      email: 'test@example.com',
      password: 'Qwerty123!',
    };
    const mockError = { status: 500, message: 'Internal Server Error' };

    spyOn(authService, 'register').and.returnValue(of({}));
    spyOn(authService, 'login').and.returnValue(throwError(mockError));

    authService.registerAndLogin(userRegisterDto).subscribe(
      () => {
        console.log('OK');
      },
      (error) => {
        expect(error).toEqual(mockError);
      },
    );

    const registerReq = httpTestingController.expectOne(
      `${environment.apiUrl}/api/users/register`,
    );
    expect(registerReq.request.method).toBe('POST');
    expect(registerReq.request.body).toEqual(userRegisterDto);
    registerReq.flush({}); // Mock response for registration request

    const loginReq = httpTestingController.expectOne(
      `${environment.apiUrl}/api/users/login`,
    );
    expect(loginReq.request.method).toBe('POST');
    expect(loginReq.request.body).toEqual({
      email: userRegisterDto.email,
      password: userRegisterDto.password,
    });
    loginReq.flush({}, mockError);
  });
});
