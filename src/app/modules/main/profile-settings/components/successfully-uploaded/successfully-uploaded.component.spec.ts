import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfullyUploadedComponent } from './successfully-uploaded.component';

describe('SuccessfullyUploadedComponent', () => {
  let component: SuccessfullyUploadedComponent;
  let fixture: ComponentFixture<SuccessfullyUploadedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuccessfullyUploadedComponent],
    });
    fixture = TestBed.createComponent(SuccessfullyUploadedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
