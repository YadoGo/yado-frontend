import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametersDetailsComponent } from './parameters-details.component';

describe('ParametersDetailsComponent', () => {
  let component: ParametersDetailsComponent;
  let fixture: ComponentFixture<ParametersDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParametersDetailsComponent],
    });
    fixture = TestBed.createComponent(ParametersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
