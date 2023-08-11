import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableRatesComponent } from './available-rates.component';

describe('AvailableRatesComponent', () => {
  let component: AvailableRatesComponent;
  let fixture: ComponentFixture<AvailableRatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvailableRatesComponent],
    });
    fixture = TestBed.createComponent(AvailableRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
