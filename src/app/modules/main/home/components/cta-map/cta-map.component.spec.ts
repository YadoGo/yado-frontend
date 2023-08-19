import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaMapComponent } from './cta-map.component';

describe('CtaMapComponent', () => {
  let component: CtaMapComponent;
  let fixture: ComponentFixture<CtaMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CtaMapComponent]
    });
    fixture = TestBed.createComponent(CtaMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
