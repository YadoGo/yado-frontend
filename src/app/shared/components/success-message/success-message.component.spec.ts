import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuccessMessageComponent } from './success-message.component';

describe('SuccessMessageComponent', () => {
  let fixture: ComponentFixture<SuccessMessageComponent>;
  let component: SuccessMessageComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuccessMessageComponent],
    });

    fixture = TestBed.createComponent(SuccessMessageComponent);
    component = fixture.componentInstance;
  });

  it('should create the SuccessMessageComponent', () => {
    expect(component).toBeTruthy();
  });
});
