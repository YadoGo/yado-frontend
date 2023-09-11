import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { ConfirmDeleteComponent } from './confirm-delete.component';
import { ProfileSettingsService } from '../../services/profile-settings.service';
import { Store } from '@ngrx/store';
import { UserService } from '@core/services/user/user.service';
import { of, throwError } from 'rxjs';

describe('ConfirmDeleteComponent', () => {
  let component: ConfirmDeleteComponent;
  let fixture: ComponentFixture<ConfirmDeleteComponent>;
  let profileSettingsService: jasmine.SpyObj<ProfileSettingsService>;
  let store: jasmine.SpyObj<Store>;
  let userService: jasmine.SpyObj<UserService>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(() => {
    profileSettingsService = jasmine.createSpyObj('ProfileSettingsService', [
      'setShowDeleteAlert',
    ]);
    store = jasmine.createSpyObj('Store', ['select']);
    userService = jasmine.createSpyObj('UserService', ['deleteUser']);
    router = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      declarations: [ConfirmDeleteComponent],
      providers: [
        { provide: ProfileSettingsService, useValue: profileSettingsService },
        { provide: Store, useValue: store },
        { provide: UserService, useValue: userService },
        { provide: Router, useValue: router },
      ],
    });

    fixture = TestBed.createComponent(ConfirmDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should cancel the delete operation', () => {
    component.onCancelClick();
    expect(profileSettingsService.setShowDeleteAlert).toHaveBeenCalledWith(
      false,
    );
  });

  it('should confirm and execute user deletion', () => {
    const userId = '123';
    store.select.and.returnValue(of(userId));

    component.confirmDelete();

    expect(userService.deleteUser).toHaveBeenCalledWith(userId);
    expect(localStorage.removeItem).toHaveBeenCalledWith('token');
    expect(router.navigate).toHaveBeenCalledWith(['/']);
  });

  it('should handle user deletion error', () => {
    const userId = '123';
    store.select.and.returnValue(of(userId));
    const error = { message: 'Deletion error' };
    userService.deleteUser.and.returnValue(throwError(error));

    component.confirmDelete();

    expect(userService.deleteUser).toHaveBeenCalledWith(userId);
    expect(console.error).toHaveBeenCalledWith('Error:', error);
  });
});
