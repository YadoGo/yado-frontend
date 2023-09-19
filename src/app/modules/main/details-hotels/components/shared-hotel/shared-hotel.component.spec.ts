import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedHotelComponent } from './shared-hotel.component';

describe('SharedHotelComponent', () => {
  let component: SharedHotelComponent;
  let fixture: ComponentFixture<SharedHotelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SharedHotelComponent],
    });
    fixture = TestBed.createComponent(SharedHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
