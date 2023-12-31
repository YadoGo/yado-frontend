import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginationHotelsComponent } from './pagination-hotels.component';

describe('PaginationHotelsComponent', () => {
  let fixture: ComponentFixture<PaginationHotelsComponent>;
  let component: PaginationHotelsComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginationHotelsComponent],
    });

    fixture = TestBed.createComponent(PaginationHotelsComponent);
    component = fixture.componentInstance;
  });

  it('should create the PaginationHotelsComponent', () => {
    expect(component).toBeTruthy();
  });
});
