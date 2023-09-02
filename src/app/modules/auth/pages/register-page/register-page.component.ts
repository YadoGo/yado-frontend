import { Component } from '@angular/core';
import { AuthService } from '@core/services/auth/auth.service';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})
export class RegisterPageComponent {
  registrationForm: FormGroup;
  formSubmitted = false;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.registrationForm = this.formBuilder.group({
      username: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          containsUppercase,
          containsSpecialCharacter,
        ],
      ],
      roleId: [1, Validators.required],
    });
  }

  onSubmit(): void {
    this.formSubmitted = true;
    if (this.registrationForm.valid) {
      const userRegisterDto = this.registrationForm.value;
      this.authService.registerAndLogin(userRegisterDto).subscribe(
        () => {
          this.router.navigate(['/']);
        },
        (error) => {
          console.error('Error:', error);
        },
      );
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
