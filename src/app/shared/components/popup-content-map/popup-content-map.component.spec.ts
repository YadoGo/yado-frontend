import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupContentMapComponent } from './popup-content-map.component';

describe('PopupContentMapComponent', () => {
  let component: PopupContentMapComponent;
  let fixture: ComponentFixture<PopupContentMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupContentMapComponent],
    });
    fixture = TestBed.createComponent(PopupContentMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
