import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapHotelsComponent } from './map-hotels.component';

describe('MapHotelsComponent', () => {
  let component: MapHotelsComponent;
  let fixture: ComponentFixture<MapHotelsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapHotelsComponent]
    });
    fixture = TestBed.createComponent(MapHotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
