import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let fixture: ComponentFixture<ListComponent>;
  let component: ListComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListComponent],
    });

    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
  });

  it('should create the ListComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize hotels array', () => {
    expect(component.hotels).toBeDefined();
    expect(component.hotels.length).toBe(0);
  });

  it('should initialize currentPage to 1', () => {
    expect(component.currentPage).toBe(1);
  });

  it('should initialize hotelsPerPage to 15', () => {
    expect(component.hotelsPerPage).toBe(15);
  });

  it('should have an undefined totalHotels property', () => {
    expect(component.totalHotels).toBeUndefined();
  });
});
