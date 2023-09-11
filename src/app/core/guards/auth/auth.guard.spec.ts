import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let router: Router;
  let store: jasmine.SpyObj<Store>;

  beforeEach(() => {
    store = jasmine.createSpyObj('Store', ['select']);
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [AuthGuard, { provide: Store, useValue: store }],
    });
    guard = TestBed.inject(AuthGuard);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should return true if there is no token or user ID', () => {
    store.select.and.returnValue(of(''));
    spyOn(localStorage, 'getItem').and.returnValue(null);

    guard.canActivate().subscribe((result) => {
      expect(result).toBeTrue();
    });
  });

  it('should navigate to "/" and return false if there is a token and user ID', () => {
    store.select.and.returnValue(of('user123'));
    spyOn(localStorage, 'getItem').and.returnValue('mockToken');
    spyOn(router, 'navigate');

    guard.canActivate().subscribe((result) => {
      expect(result).toBeFalse();
      expect(router.navigate).toHaveBeenCalledWith(['/']);
    });
  });
});
