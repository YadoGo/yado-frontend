import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    // Inyectamos el guardia en el TestBed
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should allow access if user is not logged in', () => {
    const routeSnapshot: ActivatedRouteSnapshot = new ActivatedRouteSnapshot();
    const stateSnapshot: RouterStateSnapshot =
      jasmine.createSpyObj<RouterStateSnapshot>('RouterStateSnapshot', [
        'toString',
      ]);

    spyOn(localStorage, 'getItem').and.returnValue(null);

    expect(guard.canActivate(routeSnapshot, stateSnapshot)).toBeTrue();
  });

  it('should redirect to "/" if user is logged in', () => {
    const routeSnapshot: ActivatedRouteSnapshot = new ActivatedRouteSnapshot();
    const stateSnapshot: RouterStateSnapshot =
      jasmine.createSpyObj<RouterStateSnapshot>('RouterStateSnapshot', [
        'toString',
      ]);

    spyOn(localStorage, 'getItem').and.returnValue('someToken');

    spyOn(guard['router'], 'navigate');

    expect(guard.canActivate(routeSnapshot, stateSnapshot)).toBeFalse();
    expect(guard['router'].navigate).toHaveBeenCalledWith(['/']);
  });
});
