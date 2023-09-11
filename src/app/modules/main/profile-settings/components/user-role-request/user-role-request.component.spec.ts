import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserRoleRequestComponent } from './user-role-request.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

describe('UserRoleRequestComponent', () => {
  let component: UserRoleRequestComponent;
  let fixture: ComponentFixture<UserRoleRequestComponent>;
  let formBuilder: FormBuilder;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserRoleRequestComponent],
      imports: [ReactiveFormsModule],
    });

    fixture = TestBed.createComponent(UserRoleRequestComponent);
    component = fixture.componentInstance;
    formBuilder = TestBed.inject(FormBuilder);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the solicitudForm with the required controls', () => {
    const solicitudForm = component.solicitudForm;
    expect(solicitudForm).toBeTruthy();
    expect(solicitudForm.get('information')).toBeTruthy();
  });

  it('should update character count when information control value changes', () => {
    const informationControl = component.solicitudForm.get('information');
    expect(component.characterCount).toBe(0);

    informationControl?.setValue('Lorem ipsum');
    component.updateCharacterCount();
    expect(component.characterCount).toBeGreaterThan(0);
    expect(component.characterCount).toBeLessThanOrEqual(500);

    informationControl?.setValue(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    );
    component.updateCharacterCount();
    expect(component.characterCount).toBeGreaterThan(0);
    expect(component.characterCount).toBeLessThanOrEqual(500);
  });

  it('should submit request successfully when the form is valid', () => {
    const informationControl = component.solicitudForm.get('information');
    informationControl?.setValue(
      'Valid information within the allowed character limit.',
    );

    component.submitRequest();

    expect(component.changesSavedSuccessfully).toBeTrue();
    expect(component.errorOccurred).toBeFalse();
  });

  it('should handle form submission error when the form is invalid', () => {
    const informationControl = component.solicitudForm.get('information');
    informationControl?.setValue('Invalid info');

    component.submitRequest();

    expect(component.changesSavedSuccessfully).toBeFalse();
    expect(component.errorOccurred).toBeTrue();
  });
});
