import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationHotelsComponent } from './pagination-hotels.component';

describe('PaginationHotelsComponent', () => {
  let component: PaginationHotelsComponent;
  let fixture: ComponentFixture<PaginationHotelsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginationHotelsComponent],
    });
    fixture = TestBed.createComponent(PaginationHotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
