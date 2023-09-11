import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'; // Importa RouterTestingModule
import { Router } from '@angular/router';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { NavBarComponent } from './nav-bar.component';
import {
  selectUserLoggedIn,
  selectUsername,
} from '@core/states/user.selectors';
import { logout } from '@core/states/user.actions';

describe('NavBarComponent', () => {
  let fixture: ComponentFixture<NavBarComponent>;
  let component: NavBarComponent;
  let mockStore: MockStore;
  let router: Router;

  const initialState = {
    user: {
      loggedIn: true,
      username: 'testuser',
    },
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavBarComponent],
      imports: [RouterTestingModule],
      providers: [
        provideMockStore({ initialState }),
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate'),
          },
        },
      ],
    });

    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.inject(MockStore);
    router = TestBed.inject(Router);

    mockStore.overrideSelector(selectUserLoggedIn, true);
    mockStore.overrideSelector(selectUsername, 'testuser');

    fixture.detectChanges();
  });

  it('should create the NavBarComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should set showNotification to true if notificationShown is not in localStorage', () => {
    spyOn(localStorage, 'getItem').and.returnValue(null);
    component.ngOnInit();
    expect(component.showNotification).toBeTrue();
    expect(localStorage.getItem).toHaveBeenCalledWith('notificationShown');
  });

  it('should not set showNotification to true if notificationShown is in localStorage', () => {
    spyOn(localStorage, 'getItem').and.returnValue('true');
    component.ngOnInit();
    expect(component.showNotification).toBeFalse();
    expect(localStorage.getItem).toHaveBeenCalledWith('notificationShown');
  });

  it('should logout the user', () => {
    spyOn(localStorage, 'removeItem');
    spyOn(mockStore, 'dispatch');

    component.logout();

    expect(localStorage.removeItem).toHaveBeenCalledWith('token');
    expect(mockStore.dispatch).toHaveBeenCalledWith(logout());
    expect(router.navigate).toHaveBeenCalledWith(['/']);
    expect(window.location.reload).toHaveBeenCalled();
  });
});
