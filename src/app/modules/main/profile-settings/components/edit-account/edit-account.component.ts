import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserDetails } from '@core/models/user/user-details/user-details.model';
import { UserService } from '@core/services/user/user.service';
import { UserState } from '@core/states/user.state';
import { selectUser } from '@core/states/user.selectors';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.css'],
})
export class EditAccountComponent implements OnInit {
  avatarUrl = 'https://avatars.githubusercontent.com/u/94017645?v=4';
  user!: UserDetails;
  originalUser!: UserDetails;
  profileForm!: FormGroup;
  changesSavedSuccessfully = false;
  errorOccurred = false;
  showAlert = false;
  isFormDirty = false;

  constructor(
    private userService: UserService,
    private store: Store<UserState>,
    private formBuilder: FormBuilder,
  ) {
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

  areObjectsEqual(obj1: UserDetails, obj2: UserDetails): boolean {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.avatarUrl = e.target.result;
      };

      reader.readAsDataURL(file);
    }
  }
}
