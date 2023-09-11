import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { AuthService } from '@core/services/auth/auth.service';
import { RegisterPageComponent } from './register-page.component';

describe('RegisterPageComponent', () => {
  let component: RegisterPageComponent;
  let fixture: ComponentFixture<RegisterPageComponent>;
  let authService: jasmine.SpyObj<AuthService>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(() => {
    authService = jasmine.createSpyObj('AuthService', ['registerAndLogin']);
    router = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      declarations: [RegisterPageComponent],
      imports: [ReactiveFormsModule],
      providers: [
        { provide: AuthService, useValue: authService },
        { provide: Router, useValue: router },
      ],
    });

    fixture = TestBed.createComponent(RegisterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should submit the registration form successfully', () => {
    const userRegisterDto = {
      username: 'john.doe',
      firstName: 'John',
      lastName: 'Doe',
      email: 'test@example.com',
      password: 'Password123!',
    };

    component.registrationForm.setValue(userRegisterDto);
    component.onSubmit();

    expect(authService.registerAndLogin).toHaveBeenCalledWith(userRegisterDto);
    expect(router.navigate).toHaveBeenCalledWith(['/']);
  });

  it('should handle registration error', () => {
    const userRegisterDto = {
      username: 'john.doe',
      firstName: 'John',
      lastName: 'Doe',
      email: 'test@example.com',
      password: 'Password123!',
    };

    const error = { message: 'Registration error' };

    authService.registerAndLogin.and.returnValue(throwError(error));

    component.registrationForm.setValue(userRegisterDto);
    component.onSubmit();

    expect(authService.registerAndLogin).toHaveBeenCalledWith(userRegisterDto);
    expect(router.navigate).not.toHaveBeenCalled();
    expect(component.formSubmitted).toBeTrue();
  });
});
