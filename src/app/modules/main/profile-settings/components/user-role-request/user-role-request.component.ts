import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-role-request',
  templateUrl: './user-role-request.component.html',
  styleUrls: ['./user-role-request.component.css'],
})
export class UserRoleRequestComponent {
  solicitudForm: FormGroup;
  changesSavedSuccessfully = false;
  errorOccurred = false;
  isSumbitForm = false;
  characterCount = 0;

  constructor(private formBuilder: FormBuilder) {
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
  }

  submitRequest() {
    this.isSumbitForm = true;
    if (this.solicitudForm.valid) {
      this.changesSavedSuccessfully = true;
      this.errorOccurred = false;
    } else {
      console.error('Form data is invalid.');
      this.errorOccurred = true;
      this.changesSavedSuccessfully = false;
    }
  }

  updateCharacterCount() {
    const informationControl = this.solicitudForm.get('information');
    if (informationControl) {
      this.characterCount = informationControl.value.length;
    }
  }
}
