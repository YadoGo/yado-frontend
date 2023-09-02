import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorUploadedComponent } from './error-uploaded.component';

describe('ErrorUploadedComponent', () => {
  let component: ErrorUploadedComponent;
  let fixture: ComponentFixture<ErrorUploadedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorUploadedComponent],
    });
    fixture = TestBed.createComponent(ErrorUploadedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
