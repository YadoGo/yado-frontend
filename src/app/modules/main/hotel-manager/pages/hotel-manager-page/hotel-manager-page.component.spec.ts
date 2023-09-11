import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { HotelManagerPageComponent } from './hotel-manager-page.component';

describe('HotelManagerPageComponent', () => {
  let component: HotelManagerPageComponent;
  let fixture: ComponentFixture<HotelManagerPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotelManagerPageComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: convertToParamMap({ id: 'your-hotel-id' }),
            },
          },
        },
      ],
    });
    fixture = TestBed.createComponent(HotelManagerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
