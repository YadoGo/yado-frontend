import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { selectUserId } from '@core/states/user.selectors';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private store: Store,
  ) {}

  canActivate(): Observable<boolean> {
    return this.store.select(selectUserId).pipe(
      map((userId) => {
        const hasToken = !!localStorage.getItem('token');
        const hasUserId = userId.trim().length > 0;
        const userLogin = hasToken && hasUserId;

        if (!userLogin) {
          return true;
        } else {
          this.router.navigate(['/']);
          return false;
        }
      }),
    );
  }
}
