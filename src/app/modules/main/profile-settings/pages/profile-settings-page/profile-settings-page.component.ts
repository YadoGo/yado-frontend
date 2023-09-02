import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfileSettingsService } from '../../services/profile-settings.service';
import { UserDetails } from '@core/models/user/user-details/user-details.model';
import { UserService } from '@core/services/user/user.service';
import { selectUser } from '@core/states/user.selectors';
import { Store } from '@ngrx/store';
import { UserState } from '@core/states/user.state';

@Component({
  selector: 'app-profile-settings-page',
  templateUrl: './profile-settings-page.component.html',
  styleUrls: ['./profile-settings-page.component.css'],
})
export class ProfileSettingsPageComponent implements OnInit, OnDestroy {
  user!: UserDetails;
  originalUser!: UserDetails;
  profileForm!: FormGroup;
  showDeleteAlert = true;
  changesSavedSuccessfully = false;
  errorOccurred = false;
  showAlert = false;
  isFormDirty = false;
  private subscription: Subscription;

  constructor(
    private profileSettingsService: ProfileSettingsService,
    private userService: UserService,
    private store: Store<UserState>,
    private formBuilder: FormBuilder,
  ) {
    this.subscription = this.profileSettingsService.showDeleteAlert$.subscribe(
      (value) => {
        this.showDeleteAlert = value;
      },
    );

    this.store.select(selectUser).subscribe((user) => {
      this.user = user;
      this.createProfileForm();
    });
  }

  ngOnInit(): void {
    this.profileForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
    });

    this.store.select(selectUser).subscribe((user) => {
      if (user) {
        this.user = user;
        this.profileForm.patchValue({
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          username: user.username,
        });
      }
    });

    this.profileForm.valueChanges.subscribe(() => {
      this.isFormDirty = !this.areObjectsEqual(
        this.profileForm.value,
        this.originalUser,
      );
    });
  }

  createProfileForm() {
    this.profileForm = this.formBuilder.group({
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      email: this.user.email,
      username: this.user.username,
    });
  }

  updateUserProfile() {
    const updatedUser: UserDetails = {
      ...this.user,
      firstName: this.profileForm.value.firstName,
      lastName: this.profileForm.value.lastName,
      email: this.profileForm.value.email,
      username: this.profileForm.value.username,
    };

    this.userService.updateUser(updatedUser).subscribe(
      (response) => {
        this.changesSavedSuccessfully = true;
        this.errorOccurred = false;

        setTimeout(() => {
          this.showAlert = false;
        }, 5000);
      },
      (error) => {
        this.errorOccurred = true;
      },
    );
  }

  onShowAlertDelete() {
    this.showDeleteAlert = true;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  areObjectsEqual(obj1: UserDetails, obj2: UserDetails): boolean {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
  }
}
