import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import {
  selectUserLoggedIn,
  selectUsername,
} from '@core/states/user.selectors';
import { Observable } from 'rxjs';
import { logout } from '@core/states/user.actions';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  isMobileMenuOpen = false;
  isLoggedIn$: Observable<boolean>;
  username$!: Observable<string>;
  userRoleId$!: Observable<number>;
  isHotelManager = false;
  isAdmin = false;
  showNotification = false;

  constructor(
    private store: Store,
    private router: Router,
  ) {
    this.isLoggedIn$ = this.store.select(selectUserLoggedIn);

    if (!localStorage.getItem('notificationShown')) {
      this.showNotification = true;
    }
  }

  ngOnInit(): void {
    this.isLoggedIn$ = this.store.select(selectUserLoggedIn);
    this.username$ = this.store.select(selectUsername);

    const notificationShown = localStorage.getItem('notificationShown');

    if (!notificationShown) {
      this.showNotification = true;
      localStorage.setItem('notificationShown', 'true');
    }
  }

  logout(): void {
    localStorage.removeItem('token');
    this.store.dispatch(logout());
    this.router.navigate(['/']);
    // TODO: Arreglar el cambio de componente al cambiar la sesion
    window.location.reload();
  }

  openMobileMenu() {
    this.isMobileMenuOpen = true;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
}
