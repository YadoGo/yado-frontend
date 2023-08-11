import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesHotelComponent } from './images-hotel.component';

describe('ImagesHotelComponent', () => {
  let component: ImagesHotelComponent;
  let fixture: ComponentFixture<ImagesHotelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImagesHotelComponent]
    });
    fixture = TestBed.createComponent(ImagesHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
