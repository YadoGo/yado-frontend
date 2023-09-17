import { Component, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserRoleRequestService } from '@core/services/user-role-request/user-role-request.service';
import { select, Store } from '@ngrx/store';
import { selectUserId } from '@core/states/user.selectors';
import { UserUserRoleRequest } from '@core/models';

@Component({
  selector: 'app-user-role-request',
  templateUrl: './user-role-request.component.html',
  styleUrls: ['./user-role-request.component.css'],
})
export class UserRoleRequestComponent {
  solicitudForm: FormGroup;
  changesSavedSuccessfully = false;
  errorOccurred = false;
  isSubmitForm = false;
  characterCount = 0;
  userId$!: string;
  isProgress?: boolean;
  requestStatus = 'InPending';

  constructor(
    private formBuilder: FormBuilder,
    private userRoleRequestService: UserRoleRequestService,
    private store: Store,
    private ngZone: NgZone,
  ) {
    this.solicitudForm = this.formBuilder.group({
      information: [
        '',
        [
          Validators.required,
          Validators.minLength(250),
          Validators.maxLength(500),
        ],
      ],
    });

    this.solicitudForm.controls['information'].valueChanges.subscribe(() => {
      if (
        !this.solicitudForm.controls['information'].hasError('required') &&
        !this.solicitudForm.controls['information'].hasError('minlength') &&
        !this.solicitudForm.controls['information'].hasError('maxlength')
      ) {
        this.errorOccurred = false;
      }
    });

    this.store.pipe(select(selectUserId)).subscribe((userId: string) => {
      this.userId$ = userId;
      this.loadUserStatusFromLocalStorage();
      this.getUserStatus();
    });

    this.ngZone.run(() => {
      this.isProgress = false;
    });
  }

  loadUserStatusFromLocalStorage() {
    const isProgress = localStorage.getItem('isProgress');
    if (isProgress === 'true') {
      this.isProgress = true;
    } else {
      this.isProgress = false;
    }
  }

  saveUserStatusToLocalStorage() {
    localStorage.setItem('isProgress', this.isProgress ? 'true' : 'false');
  }

  getUserStatus() {
    if (this.userId$) {
      this.userRoleRequestService.getUserRoleRequest(this.userId$).subscribe(
        (userRoleRequest: UserUserRoleRequest) => {
          this.ngZone.run(() => {
            if (userRoleRequest.status === 'InProgress') {
              this.isProgress = true;
            } else {
              this.isProgress = false;
            }
            this.saveUserStatusToLocalStorage();
          });
        },
        (error) => {
          this.ngZone.run(() => {
            this.isProgress = false;
            this.saveUserStatusToLocalStorage();
            console.error('Error:', error);
          });
        },
      );
    }
  }

  submitRequest() {
    this.isSubmitForm = true;
    if (this.solicitudForm.valid) {
      const message = this.solicitudForm.get('information')?.value;

      const userRoleRequest: UserUserRoleRequest = {
        userId: this.userId$,
        roleId: 2,
        status: 'InProgress',
        message: message,
      };

      this.userRoleRequestService
        .createUserRoleRequest(userRoleRequest)
        .subscribe(
          () => {
            this.ngZone.run(() => {
              this.changesSavedSuccessfully = true;
              this.errorOccurred = false;
              this.isSubmitForm = false;
              this.isProgress = true;
            });
          },
          (error) => {
            this.ngZone.run(() => {
              console.error('Error: ', error);
              this.changesSavedSuccessfully = false;
              this.errorOccurred = true;
              this.isSubmitForm = false;
            });
          },
        );
    } else {
      this.ngZone.run(() => {
        console.error('Form data is invalid.');
        this.errorOccurred = true;
        this.changesSavedSuccessfully = false;
      });
    }
  }

  updateCharacterCount() {
    const informationControl = this.solicitudForm.get('information');
    if (informationControl) {
      this.characterCount = informationControl.value.length;
    }
  }
}
