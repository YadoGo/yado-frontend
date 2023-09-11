import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditAccountComponent } from './edit-account.component';
import { UserDetails } from '@core/models/user/user-details/user-details.model';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from '@core/services/user/user.service';
import { UserState } from '@core/states/user.state';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';

describe('EditAccountComponent', () => {
  let component: EditAccountComponent;
  let fixture: ComponentFixture<EditAccountComponent>;
  let userService: jasmine.SpyObj<UserService>;
  let store: jasmine.SpyObj<Store<UserState>>;
  const mockUserDetails: UserDetails = {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    username: 'johndoe',
    imageProfile: 'image.png',
  };

  beforeEach(() => {
    userService = jasmine.createSpyObj('UserService', ['updateUser']);
    store = jasmine.createSpyObj('Store', ['select']);
    store.select.and.returnValue(of(mockUserDetails));

    TestBed.configureTestingModule({
      declarations: [EditAccountComponent],
      imports: [ReactiveFormsModule],
      providers: [
        { provide: UserService, useValue: userService },
        { provide: Store, useValue: store },
      ],
    });

    fixture = TestBed.createComponent(EditAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize user and create profileForm', () => {
    expect(component.user).toEqual(mockUserDetails);
    expect(component.originalUser).toEqual(mockUserDetails);
    expect(component.profileForm).toBeTruthy();
  });

  it('should update user profile', () => {
    component.profileForm.patchValue({
      firstName: 'UpdatedFirstName',
      lastName: 'UpdatedLastName',
      email: 'updated@example.com',
      username: 'updatedUsername',
    });

    component.updateUserProfile();

    expect(userService.updateUser).toHaveBeenCalledWith({
      ...mockUserDetails,
      firstName: 'UpdatedFirstName',
      lastName: 'UpdatedLastName',
      email: 'updated@example.com',
      username: 'updatedUsername',
    });
    expect(component.changesSavedSuccessfully).toBeTrue();
    expect(component.errorOccurred).toBeFalse();

    // Simulate setTimeout
    fixture.detectChanges();
    expect(component.showAlert).toBeFalse();
  });

  it('should handle update error', () => {
    userService.updateUser.and.returnValue(
      new Observable((observer) => {
        observer.error('Update error');
      }),
    );

    component.updateUserProfile();

    expect(userService.updateUser).toHaveBeenCalled();
    expect(component.errorOccurred).toBeTrue();
  });

  it('should detect form changes', () => {
    component.profileForm.patchValue({
      firstName: 'UpdatedFirstName',
    });

    expect(component.isFormDirty).toBeTrue();

    component.profileForm.patchValue({
      firstName: 'John',
    });

    expect(component.isFormDirty).toBeFalse();
  });

  it('should handle file selection', () => {
    const event = {
      target: {
        files: [new File([''], 'avatar.png', { type: 'image/png' })],
      },
    };
    component.onFileSelected(event);
    expect(component.avatarUrl).toBe('data:image/png;base64,');
  });
});
