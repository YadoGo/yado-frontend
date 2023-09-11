import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PopupContentMapComponent } from './popup-content-map.component';

describe('PopupContentMapComponent', () => {
  let fixture: ComponentFixture<PopupContentMapComponent>;
  let component: PopupContentMapComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupContentMapComponent],
    });

    fixture = TestBed.createComponent(PopupContentMapComponent);
    component = fixture.componentInstance;
  });

  it('should create the PopupContentMapComponent', () => {
    expect(component).toBeTruthy();
  });
});
