import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { UserService } from '@core/services/user/user.service';
import { UserChangePassword } from '@core/models/user';
import { selectUserId } from '@core/states/user.selectors';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
})
export class ChangePasswordComponent {
  changePasswordForm: FormGroup;
  userId$!: string;
  changesSavedSuccessfully = false;
  errorOccurred = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private store: Store,
  ) {
    this.changePasswordForm = this.formBuilder.group({
      currentPassword: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          containsUppercase,
          containsSpecialCharacter,
        ],
      ],
      newPassword: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          containsUppercase,
          containsSpecialCharacter,
        ],
      ],
      confirmPassword: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          containsUppercase,
          containsSpecialCharacter,
        ],
      ],
    });

    this.store.pipe(select(selectUserId)).subscribe((userId: string) => {
      this.userId$ = userId;
    });
  }

  onSubmit() {
    if (this.changePasswordForm.valid) {
      const changePasswordDto: UserChangePassword = {
        currentPassword: this.changePasswordForm.value.currentPassword,
        newPassword: this.changePasswordForm.value.newPassword,
        confirmPassword: this.changePasswordForm.value.confirmPassword,
      };

      this.userService
        .changePassword(this.userId$, changePasswordDto)
        .subscribe(
          () => {
            this.changesSavedSuccessfully = true;
            this.errorOccurred = false;
            console.log('Password changed successfully');
          },
          (error) => {
            this.changesSavedSuccessfully = false;
            this.errorOccurred = true;
            console.error('Error changing password:', error);
          },
        );
    } else {
      this.errorOccurred = true;
    }
  }
}

function containsUppercase(
  control: AbstractControl,
): { [key: string]: boolean } | null {
  const value: string = control.value;
  if (/[A-Z]/.test(value)) {
    return null;
  }
  return { uppercase: true };
}

function containsSpecialCharacter(
  control: AbstractControl,
): { [key: string]: boolean } | null {
  const value: string = control.value;
  if (/[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/.test(value)) {
    return null;
  }
  return { specialCharacter: true };
}
