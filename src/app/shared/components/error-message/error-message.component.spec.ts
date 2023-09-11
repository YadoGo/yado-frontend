import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ErrorMessageComponent } from './error-message.component';

describe('ErrorMessageComponent', () => {
  let fixture: ComponentFixture<ErrorMessageComponent>;
  let component: ErrorMessageComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorMessageComponent],
    });

    fixture = TestBed.createComponent(ErrorMessageComponent);
    component = fixture.componentInstance;
  });

  it('should create the ErrorMessageComponent', () => {
    expect(component).toBeTruthy();
  });
});
