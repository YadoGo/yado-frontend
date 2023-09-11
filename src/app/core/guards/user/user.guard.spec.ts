import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { UserGuard } from './user.guard';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';

describe('UserGuard', () => {
  let guard: UserGuard;
  let router: Router;
  let store: jasmine.SpyObj<Store>;

  beforeEach(() => {
    store = jasmine.createSpyObj('Store', ['select']);
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [UserGuard, { provide: Store, useValue: store }],
    });
    guard = TestBed.inject(UserGuard);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should return true if the user is not logged in', () => {
    // Simular que el selector selectUserLoggedIn devuelve false
    store.select.and.returnValue(of(false));

    const result = guard.canActivate(null as any, null as any);

    expect(result).toBeTrue();
  });

  it('should navigate to "/" and return false if the user is logged in', () => {
    // Simular que el selector selectUserLoggedIn devuelve true
    store.select.and.returnValue(of(true));
    spyOn(router, 'navigate');

    const result = guard.canActivate(null as any, null as any);

    expect(result).toBeFalse();
    expect(router.navigate).toHaveBeenCalledWith(['/']);
  });
});
